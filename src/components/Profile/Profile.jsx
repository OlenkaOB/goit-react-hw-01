import s from './Profile.module.css'
const Profile = ({
    name,
    tag,
    location,
    image,
    stats:{followers, views, likes}

}) => {
    return (
        <div className={s.wrapper}>
  <div className={s.card}>
    <img className={s.image} alt ='User Avatar'
      src={image}
      />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.statsItem}>
      <span className={s.followers}>Followers</span>
      <span className={s.followersSpan}>{followers}</span>
    </li>
    <li  className={s.statsItem}>
      <span className={s.views}>Views</span>
      <span className={s.viewsSpan }>{views}</span>
    </li>
    <li  className={s.statsItem}>
      <span className={s.likes}>Likes</span>
      <span className={s.likesSpan}>{likes}</span>
    </li>
  </ul>
</div>

    )
}
    
export  default Profile;