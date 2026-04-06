import { Avatar } from '../../avatar/avatar';
import { Card } from '../../card/card';
import type { PostProps } from '../post';
import { Tags } from '../../tags/tags';
import { Timestamp } from '../../timestamp/timestamp';
import './image-post.css';

export interface ImagePostProps extends PostProps {
    images: Array<string>
}

//TO-DO: Image viewer
const zoomImage = () => {
    console.log('zoom image, image viewer')
}

export const ImagePost = ({ title, body, date, tags, images }: ImagePostProps) => {
    return (
        <Card>
            <div className="heading">
                <Avatar />
                <h4>{title}</h4>
            </div>
            <div className='content'>
                <div className='image-container'>
                    <img className='image' src={`/images/${images[0]}`} alt={body} onClick={() => zoomImage}/>
                </div>
                <p className='body'>{body}</p>
                <Tags tags={tags} />
                <Timestamp date={date} />
            </div>

      </Card>
    )
}

