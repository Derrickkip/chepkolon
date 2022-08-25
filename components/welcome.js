import Image from 'next/image'

const Welcome = () => {
    return (
        <section>
            <div className="bg-[#fff] text-[#777777] flex p-20 relative">
                <div className="w-4/6 mx-10">
                    <h1 className='text-2xl font-bold text-black'>A warm welcome from the director</h1>
                    <div className='mt-4'>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p className='mt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
                        <p className='mt-4'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className='h-full mx-10'>
                    <Image className="h-2/6" src={require('../assets/assembly.jpg')} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Welcome;