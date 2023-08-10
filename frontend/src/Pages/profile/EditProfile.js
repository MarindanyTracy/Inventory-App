import React, { useState } from 'react';
import './profile.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth/authSlice';
import Loader from '../../components/Loader/loader';
import Card from '../../components/Card/Card';

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector(selectUser);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  }
  const [profile, setProfile] = useState(initialState)
  const [profileImage, setProfileImage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0])
  }

  const saveProfile = (e) => {
    e.preventDefault();
  }

  return (
    <div className='profile --my2'>
      {isLoading && <Loader /> }

      <Card cardClass={"card --flex-dir-column"}>
          <span className='profile-photo'>
            <img src={user?.photo} alt="profile pic" />
          </span>
          <form className='--form-control' onSubmit={saveProfile}>
          <span className='profile-data'>
           <p>
            <label>Name: </label>
            <input type="text" name="name" onChange={handleInputChange} value={profile?.name} />
           </p>
           <p>
           <label>Email: </label>
            <input type="email" name="email" value={profile?.email} disabled />
            <br />
            <code>Email cannot be changed</code>
           </p>
           <p>
            <label>Phone: </label>
            <input type="phone" name="phone" onChange={handleInputChange} value={profile?.phone} />
          </p>
           <p> 
           <label>Bio: </label>
            <textarea name="bio" onChange={handleInputChange} value={profile?.bio} cols='30' rows="10"> </textarea>
          </p>
          <p>
          <label>Photo: </label>
            <input type="file" name="image" onChange={handleImageChange}  />
          </p>
           <div>
              <button className='--btn --btn-primary'>Save Changes</button>
            
           </div>
          </span>
          </form>
        </Card>
    </div>
  )
}

export default EditProfile
