import { Avatar } from '../avatar/avatar';
import { Card } from '../card/card';
import { Tags } from '../tags/tags';
import { Timestamp } from '../timestamp/timestamp';
import './post.css';

export interface PostProps {
    title: string;
    body: string;
    date: Date;
    tags: Array<string>;
}

export const Post = ({ title, body, date, tags }: PostProps) => {
    return (
        <Card>
            <div className="heading">
                <Avatar />
                <h4>{title}</h4>
            </div>
            <div className='content'>
                <p className='body'>{body}</p>
                <Tags tags={tags} />
                <Timestamp date={date} />
            </div>

      </Card>
    )
}

