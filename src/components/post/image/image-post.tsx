import { Avatar } from '../../avatar/avatar'
import { Card } from '../../card/card'
import type { PostProps } from '../post'
import { Tags } from '../../tags/tags'
import { Timestamp } from '../../timestamp/timestamp'
import './image-post.css'
import type { ContentfulImage } from '../../../types/types'
import { useState } from 'react'

export interface ImagePostProps extends PostProps {
  images: Array<ContentfulImage>
}

//TO-DO: Image viewer
const zoomImage = () => {
  console.log('zoom image, image viewer')
}

export const ImagePost = ({
  title,
  body,
  date,
  tags,
  images,
}: ImagePostProps) => {
  const [imgs, _setImgs] = useState<Array<ContentfulImage> | null>(
    images ?? null,
  )
  return (
    <Card>
      <div className="heading">
        <Avatar />
        <h4>{title}</h4>
      </div>
      <div className="content">
        <div className="image-container">
          {imgs && imgs.length > 0 && (
            <img
              className="image"
              src={imgs[0].fields.file.url}
              alt="fsadasd"
              onClick={() => zoomImage}
            />
          )}
        </div>
        {body}
        <Tags tags={tags} />
        <Timestamp date={date} />
      </div>
    </Card>
  )
}
