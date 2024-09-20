



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useForm } from 'react-hook-form';

// export default function LoginForm() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     mode: 'onChange',
//   });
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             placeholder="bill"
//             {...register('firstName', { required: true })}
//           />
//           {errors.firstName && 'This is required'}
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             placeholder="luo"
//             {...register('lastName', { required: true })}
//           />
//           {errors.lastName && 'This is required'}
//         </div>

//         <div>
//           <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
//             Email
//           </label>
//           <input {...register('email', { required: true })} />
//           {errors.email && 'This is required'}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }



/*
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
        <h2>Авторизация</h2>
        <form className="needs-validation"></form>
        <div className='form-group'>
          <label htmlFor='email'>Логин</label>
          <input type='email'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Пароль</label>
          <input type='password'></input>
        </div>
        <button type='submit' className='btn'>Войти</button>
      </div>
    </div>
  );
};

export default LoginForm;
*/
/*
<Form.Control
          required
          value={bidAmount}
          isInvalid={!(parseInt(bidAmount) > 0) && (bidAmount.length || formSubmitted)}
          onChange={(e) => setBidAmount(e.target.value)}
        />
*/



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  const validateLogin = (value) => {
    return value.length >= 3;
  };

  const validatePassword = (value) => {
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    //return value.length >= 8 && hasNumber.test(value) && hasUpperCase.test(value);
    return value.length >= 8
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-1">
        <Form.Group as={Col} md="10">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            isInvalid={validated && !validateLogin(login)}
          />
          <Form.Control.Feedback type="invalid">
            Логин слишком короткий
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validationCustom02">
          <Form.Label>Пароль</Form.Label>
          <div className="d-flex" style={{ position: 'relative' }}>
            <Form.Control
              required
              type={type}
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={validated && !validatePassword(password)}
              className="mr-2"
            />
            <span
              className="flex justify-around items-center"
              style={{ position: 'absolute', top: '7px', right: '60px' }}
              onClick={handleToggle}
            >
              <Icon className="absolute mr-10" icon={icon} size={25} />
            </span>
          </div>
          <Form.Control.Feedback type="invalid">
            Пароль должен содержать хотя бы одну цифру и одну букву
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Отправить форму</Button>
    </Form>
  );
}

export default LoginForm;