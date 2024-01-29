type Props = {
  children: React.ReactNode;
  //   size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, ...props }: Props) {
  const { className } = props;
  return (
    <button
      {...props}
      className={`w-60 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border border-blue-700 shadow ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
