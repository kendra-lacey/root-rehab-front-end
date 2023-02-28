// import { useState, useRef } from 'react';

// // stylesheets
// import styles from './CreatePlantForm.module.css'

// // types
// import { CreatePlantFormData, PhotoFormData } from '../../types/forms'

// interface CreatePlantFormProps {
//   onSubmit: (formData: CreatePlantFormData) => void;
// }

// const CreatePlantForm = ({ onSubmit }: CreatePlantFormProps): JSX.Element => {
//   const [form, setForm] = useState<CreatePlantFormData>({
//     name: '',
//     photo: 'File | null'
//   });
//   const [photoData, setPhotoData] = useState<PhotoFormData>({
//     photo: null
//   })
//   const [photoChanged, setPhotoChanged] = useState<boolean>(false);
//   const hiddenFileInput = useRef<HTMLInputElement>(null);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSubmit(form);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleClick = () => {
//     if (hiddenFileInput.current) {
//       hiddenFileInput.current.click();
//     }
//   };

//   const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setForm({
//         ...form,
//         photo: event.target.files[0],
//       });
//       setPhotoChanged(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div className={styles.formDiv}>
//         <label htmlFor="name-input">Plant Name:</label>
//         <input
//           required
//           type="text"
//           name="name"
//           id="name-input"
//           value={form.name}
//           placeholder="Plant-Name"
//           onChange={handleChange}
//           autoComplete="off"
//         />
//         <div>
//           <div className={styles.upload}>
//             {photoChanged && (
//               <p className={styles.uploadText}>image uploaded</p>
//             )}
//           </div>
//           <input
//             type="file"
//             id="photo-upload"
//             name="photo"
//             ref={hiddenFileInput}
//             onChange={handleChangePhoto}
//             className={styles.fileUpload}
//           />
//         </div>
//         <button className={styles.button} type="submit">
//           SUBMIT
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CreatePlantForm;


// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as plantService from '../../services/plantService'

// stylesheets
import styles from './CreatePlantForm.module.css'

// types
import { AuthFormProps } from '../../types/props'
import { CreatePlantFormData, PhotoFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const CreatePlantForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<CreatePlantFormData>({
    name: '',
  })
  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      setIsSubmitted(true)
      await plantService.createPlant(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name } = formData

  const isFormInvalid = (): boolean => {
    return !(name)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Plant Name</label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div className={styles.inputContainer}>
        <button 
          disabled={isFormInvalid() || isSubmitted} 
          className={styles.button}
        >
          {!isSubmitted ? "Add Plant" : "🚀 Sending..."}
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default CreatePlantForm

