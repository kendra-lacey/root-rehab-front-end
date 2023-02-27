import { useState, useRef } from 'react';

// stylesheets
import styles from './AddPlantButton.module.css'

// types
import { CreatePlantFormData, PhotoFormData } from '../../types/forms'

interface AddPlantButtonProps {
  onSubmit: (formData: CreatePlantFormData) => void;
}

const AddPlantButton = ({ onSubmit }: AddPlantButtonProps): JSX.Element => {
  const [form, setForm] = useState<CreatePlantFormData>({
    name: '',
    photo: null,
  });
  const [photoChanged, setPhotoChanged] = useState<boolean>(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setForm({
        ...form,
        photo: event.target.files[0],
      });
      setPhotoChanged(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formDiv}>
        <label htmlFor="name-input">Plant Name:</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Plant-Name"
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="photo-upload">Upload Photo:</label>
        <div>
          <div className={styles.upload}>
            <button className={styles.button} onClick={handleClick} form="">
              Choose File
            </button>
            {photoChanged && (
              <p className={styles.uploadText}>image uploaded</p>
            )}
          </div>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            ref={hiddenFileInput}
            onChange={handleChangePhoto}
            className={styles.fileUpload}
          />
        </div>
        <button className={styles.button} type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default AddPlantButton;