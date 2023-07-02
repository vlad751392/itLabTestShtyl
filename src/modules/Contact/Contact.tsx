import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { useState, FC } from 'react';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';

import 'swiper/css/pagination';

import bg from 'assets/png/contact/map.png';
import { Button, ButtonVariants } from 'components/Button';
import { FormInput } from 'components/FormInput/FormInput';
import { scheme } from './validationScheme/contactsValidation';

import 'swiper/css';

const inputs = [
  {
    id: 0,
    name: 'name',
    placeholder: 'Your name',
    type: 'text'
  },
  {
    id: 1,
    name: 'email',
    placeholder: 'Your email',
    type: 'email'
  },
  {
    id: 2,
    name: 'subject',
    placeholder: 'Subject',
    type: 'text'
  },
  {
    id: 4,
    name: 'message',
    placeholder: 'Message',
    type: 'text'
  }
];
type FormData = InferType<typeof scheme>;

export const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(scheme)
  });
  const [showMessage, setShowMessage] = useState(false);
  const containerStyle = {
    backgroundImage: `url(${bg})`
  };

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setShowMessage(true);
  };

  return (
    <article
      id="contact"
      className="pb-36 pt-36 bg-no-repeat bg-cover"
      style={containerStyle}>
      <section className="mx-auto w-full sm:w-fit bg-blue-primary/80">
        <form onSubmit={handleSubmit(onSubmit)} className="pb-11">
          <h2 className="text-5xl py-11">
            <b>Contact</b>
          </h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              errors={errors}
              className={
                'mx-9 py-4 sm:px-24 text-center rounded-lg outline-none ' +
                (input.id === 4 && 'pb-44 mb-2')
              }
              register={register}
            />
          ))}

          <Button type="submit" className="" variant={ButtonVariants.SECONDARY}>
            Send
          </Button>
          {showMessage && isValid && (
            <p className="mt-6 text-white">
              <b>Meassege Send successfully!</b>
            </p>
          )}
        </form>
      </section>
    </article>
  );
};
