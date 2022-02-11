
const Loader = () => {
  return (
    <div role='progressbar' className='h-max w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
      <div className='flex items-center justify-center space-x-2'>
        <div className='w-16 h-16 border-4 border-slate-500 border-solid rounded-full animate-spin border-t-transparent' />
      </div>
    </div>
  )
}

export default Loader
