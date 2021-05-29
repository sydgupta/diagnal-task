import './Post.scss';
import placeholderImage from '../../assets/images/placeholder_for_missing_posters.png';

const Post = (props) => {
    let image = '';
    let name = props.data.name;
    if(props.data['poster-image'] === 'posterthatismissing.jpg') {
        image = placeholderImage;
    }
    else{
        image = process.env.PUBLIC_URL + `/images/${props.data['poster-image']}`;
    }
    if(props.data?.name?.length > 20) {
        name = name.substring(0, 20) + '..';
    }
    return (
        <div className="single-post">
            <div className="image-wrapper">
                <img src={image} alt="" />
            </div>
            <p className="post-name">{name}</p>
        </div>
    );
}

export default Post;