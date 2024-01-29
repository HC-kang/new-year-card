import { FaArrowCircleRight } from 'react-icons/fa';

export default function ArrowRight({ ...props }) {
    const { className } = props;
    const classes = className ? `${className}` : '';
  return (
    <FaArrowCircleRight
      { ...props }
      className={`text-2xl text-sky-500 hover:text-sky-400, ${classes}`}
      aria-label='Arrow Right'
    />
  );
}
