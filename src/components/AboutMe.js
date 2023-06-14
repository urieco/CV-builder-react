export default function AboutMe() {

  const displayImage = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      const preview = document.getElementById('preview')
      preview.src = reader.result
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div className="aboutMe">
      <form>
        <label htmlFor="insertProfilePicture">Image: </label>
        <input
          type='file'
          accept='image/*'
          onChange={displayImage}
          name='insertProfilePicture'
          id='insertProfilePicture'
        />
      </form>

      <img id='preview' style={{maxWidth: '100%'}} alt='Avatar'></img>
    </div>
  )
}