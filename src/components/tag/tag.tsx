import './tag.css';

interface TagProps {
    tag: string;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

export const Tag = ({ tag, onClick }: TagProps ) => {
    return <button className="tag" onClick={onClick}>#{tag}</button>
}