const WarningText = ({ text }: { text: string }) => {
  return (
    <div className="text-xl font-bold h-screen w-full flex justify-center items-center">
      {text}
    </div>
  );
};

export default WarningText;
