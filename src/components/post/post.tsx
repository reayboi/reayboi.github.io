import type { ReactNode } from 'react';
import { Avatar } from '../avatar/avatar';
import { Card } from '../card/card';
import { Tags } from '../tags/tags';
import { Timestamp } from '../timestamp/timestamp';
import './post.css';

export interface PostProps {
    title: string;
    body: string | ReactNode;
    date: Date;
    tags: Array<string>;
}

export const Post = ({ title, body, date, tags }: PostProps) => {
    return (
        <Card>
            <div className="heading">
                <Avatar key={title} />
                <h4>{title}</h4>
            </div>
            <div className='content'>
                {body}
                <Tags tags={tags} />
                <Timestamp date={date} />
            </div>

      </Card>
    )
}

