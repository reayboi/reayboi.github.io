import './avatar.css';
import frog from '../../assets/frog.png';
import bean from '../../assets/bean.png';


export const Avatar = () => {
    const images = [frog, bean];
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];
     
    return (
        <div className='avatar'>
            <img src={image} alt={'a user avatar icon'} />
        </div>
    );
}