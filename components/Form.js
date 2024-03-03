import styles from '../styles/form.module.css'
import { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
}

const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, birth, adress, phone })
}

export default function Form() {
    return (
        <>
            <form className={styles.form}>
                <div className={styles.form_section}>
                    <label className={styles.label} htmlFor='name'>Name:</label>
                    <input className={styles.input}
                        placeholder='João, Maria, etc'
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className={styles.form_section}>
                    <label className={styles.label} htmlFor='birth'>Birth: </label>
                    <input className={styles.input}
                        type='date'
                        id='birth'
                        name='birth'
                        value={birth}
                        onChange={(event) => setBirth(event.target.value)}
                    />
                </div>

                <div className={styles.form_section}>
                    <label className={styles.label} htmlFor='adress'>Adress: </label>
                    <input className={styles.input}
                        placeholder='Rua teste, nº 11 - Santos, SP'
                        type='text'
                        id='adress'
                        name='adress'
                        value={adress}
                        onChange={(event) => setAdress(event.target.value)}
                    />
                </div>

                <div className={styles.form_section}>
                    <label className={styles.label} htmlFor='phone'>Phone: </label>
                    <input className={styles.input}
                        placeholder='(81) 99999-8888'
                        type='number'
                        id='phone'
                        name='phone'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}