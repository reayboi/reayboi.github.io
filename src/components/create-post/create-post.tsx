import './create-post.css'
import { Card } from '../card/card'
import { TextArea } from '../text-area/text-area'
import { TagInput } from '../tag-input/tag-input'
import { useState } from 'react'
import { createPost } from '../../api/contentful'
import type { Entry } from 'contentful-management'

export const CreatePost = () => {
  const [tags, setTags] = useState<Array<string>>([])

  const create = async (e: any) => {
    e.preventDefault()
    const title = e.target?.elements.title.value
    const body = e.target?.elements.body.value
    createPost(title, body, tags).then((entry: Entry | undefined) => {
      if (entry) {
        location.reload()
      } else {
        console.log('failed to publish entry')
      }
    })
  }

  return (
    <div className="create-post">
      <Card variant="create">
        <form className="create-post-container" onSubmit={create}>
          <div className="create-post__inputs">
            <input id="title" className="input" placeholder={'Title'} />
            <TextArea id="body" />
            <TagInput tags={tags} setTags={setTags} />
            <div className="button-container">
              <button className="create-button" type="submit">
                <span className="create-button-plus">+</span>
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}
