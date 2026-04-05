import './tag.css';

interface TagProps {
    tag: string;
}

export const Tag = ({tag}: TagProps ) => {
    return <button className="tag">#{tag}</button>
}