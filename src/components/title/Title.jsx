const Title = ({ title, titleDsc }) => {
  return (
    <div className="mt-[100px] flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <span className="w-[20px] h-[40px] bg-[#db4444] rounded"></span>
        <span className="title font-[600]">{title}</span>
      </div>
      <h2 className="title-dsc font-[600] text-[36px]">{titleDsc}</h2>
    </div>
  );
};

export default Title;
