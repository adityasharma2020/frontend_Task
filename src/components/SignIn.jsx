import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { Form } from 'antd';
import image from '../assets/heroImage.jpg';
import logoImage from '../assets/Vector.png';

const SignIn = () => {
	const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
	const [isLoading, setIsLoading] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();

		if (!(e.target.email.value && e.target.password.value && e.target.confirmPassword.value)) {
			alert('Oops....fill form fields');
			return;
		} else if (e.target.password.value != e.target.confirmPassword.value) {
			alert('password and confirm password are not same.');
			return;
		}

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			alert('form submitted successfully.');
		}, 3000);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<div className={styles.mainContainer}>
			{/* left container */}
			<div className={styles.leftContainer}>
				<div className={styles.imageContainer}>
					<img src={image} alt='' />
				</div>
			</div>

			{/* right conatainer */}
			<div className={styles.rightContainer}>
				<div className={styles.logoContainer}>
					<div className={styles.logo}>
						<img src={logoImage} alt='' />
					</div>
				</div>
				<div className={styles.signUpBar}>
					<h1 className={styles.h1}>SignUP</h1>
					<h3 className={styles.h3}>
						or <span className={styles.signInSpan}>signIn</span>
					</h3>
				</div>
				<div className={styles.formContainer}>
					<form className={styles.formContainer} onSubmit={handleSubmit}>
						{/* input forms */}
						<div className={styles.inputContainer}>
							<input
								className={styles.input}
								type='text'
								value={formData.email}
								name='email'
								placeholder='email'
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className={styles.inputContainer}>
							<input
								className={styles.input}
								type='password'
								value={formData.password}
								name='password'
								placeholder='password'
								onChange={(e) => handleChange(e)}
							/>
						</div>

						<div className={styles.inputContainer}>
							<input
								className={styles.input}
								type='password'
								value={formData.confirmPassword}
								placeholder='confirm Password'
								name='confirmPassword'
								onChange={(e) => handleChange(e)}
							/>
						</div>

                        <div className={styles.forgetPasswordContainer}>
                            <input type="checkbox" />
                            <h4 className={styles.forgotPassword}>forgot password</h4>
                        </div>

						<button className={styles.submitButton}>
							{isLoading ? 'Submitting...' : 'Login'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
