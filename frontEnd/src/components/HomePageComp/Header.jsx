import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faPassport, faReceipt, faSearch, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { toast } from 'react-toastify';

const Header = () => {

    //refs here
    const logoRef = useRef(null);
    const rightNavigationRef = useRef(null);
    
    const [showSignUpForm, setShowSignUpForm] = useState(false);



    const [movieName, setMovieName] = useState('');

    const navigate = useNavigate();

    const initiateSearchMovie = (e) => {
        e.preventDefault();
        if(movieName.trim() === ''){
            toast("Type a movie's name first.", {
                className: 'custom-toast',
                progressClassName: 'custom-progress-bar',
            });
            return;
        }
        navigate(`${movieName}`);
        setMovieName('');
    }

    const hanldeInput = (e) => {
        setMovieName(e.target.value);
    }

    useGSAP(() => {

        const headerTimeline = gsap.timeline();

        headerTimeline.fromTo(logoRef.current.children, {
            opacity: 0,
        }, {
            delay: 0.4,
            opacity: 1,
            duration: 1.6,
            ease: 'power1.out',
        })

        headerTimeline.fromTo(rightNavigationRef.current.children, {
            opacity: 0,
            y: -15,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power1.out',
        })
    }, []);

    //form refs here
    const formModalRef = useRef(null); 

    const handleFormModal = () => {
        console.log('hello');
        if(formModalRef.current){
            formModalRef.current.classList.add('hidden');
            formModalRef.current.classList.remove('flex');
        }
    }

    const hanldeModalFormClick = (e) => {
        e.stopPropagation();
    }


  return (
    <div className='h-[8vh] w-full flex items-center justify-between px-6 py-2 relative z-[100]'>
        <div className='h-full w-1/2 '>
            <Link ref={logoRef} to={'/'} className='relative z-[10] cursor-default'>
                <div className='absolute z-[20] top-1 -left-3 h-[100%] w-[12vw] cursor-pointer'></div>
                <img className='h-full scale-[4] ml-[5%] mt-[2%]' src={logo} alt="logo" />
            </Link>
        </div>
        <div ref={rightNavigationRef} className='h-full w-1/2 flex items-center justify-end gap-12 mt-2'>
            <div className='h-full'>
                <form onSubmit={initiateSearchMovie} className='h-full flex items-center gap-4'>
                    <button>
                        <FontAwesomeIcon icon={faSearch} className='cursor-pointer text-2xl hover:text-white hover:text-2xl transition-hover duration-150 -mr-1 active:text-xl'/>
                    </button>
                    <input value={movieName} onChange={hanldeInput} className='h-[90%] rounded bg-gray-700 px-2 py-1 focus:outline-none focus:outline-gray-500 text-gray-200' type="text" placeholder='Search Movies' />
                </form>
            </div>
            <button onClick={() => {formModalRef.current.classList.remove('hidden'); formModalRef.current.classList.add('flex'); setShowSignUpForm(true)}} className='h-[80%] px-4 bg-orange-600 text-gray-800 rounded hover:px-5 active:px-4 hover:bg-orange-500 transition-hover duration-150'>Sign Up</button>
            <button onClick={() => {formModalRef.current.classList.remove('hidden'); formModalRef.current.classList.add('flex'); setShowSignUpForm(false)}} className='hover:outline hover:outline-orange-600 px-5 h-[80%] transition-hover duration-100 hover:text-gray-200 rounded active:outline-orange-500'>Log In</button>


            <div onClick={handleFormModal} ref={formModalRef} className='h-screen w-screen fixed top-0 left-0 hidden bg-theme-light-dark z-[1000] justify-center items-center'>

                {showSignUpForm ? (
                    <div className='h-auto w-1/2 flex justify-center items-center'>
                    <form onClick={hanldeModalFormClick} className='h-[85vh] w-[55%] rounded-xl shadow-dense bg-gray-950 flex flex-col gap-10 px-4 py-2 items-center relative' >
                        <div onClick={() => {formModalRef.current.classList.remove('hidden'); formModalRef.current.classList.add('hidden');}} className='absolute top-4 right-4'>
                            <FontAwesomeIcon icon={faXmark} className='hover:text-white cursor-pointer'/>
                        </div>
                        <div className='mb-4 mt-2'>
                            <h1 className='text-2xl text-center font-bold text-gray-200'>Sign Up From Here</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <label htmlFor="username" className='flex gap-1 justify-center items-center self-start text-gray-300'>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Username</span>
                            </label>
                            <input type="text" name='username' className='bg-gray-950 border-b border-orange-500 p-2 focus:outline-none w-full' autoComplete='off'/>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <label htmlFor="username" className='flex gap-1 justify-center items-center self-start text-gray-300'>
                                <FontAwesomeIcon icon={faKey} />
                                <span>Password</span>
                            </label>
                            <input type="password" name='password' className='bg-gray-950 border-b border-orange-500 p-2 focus:outline-none w-full' autoComplete='off'/>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <label htmlFor="username" className='flex gap-1 justify-center items-center self-start text-gray-300'>
                                <FontAwesomeIcon icon={faKey} />
                                <span>Re-Type Password</span>
                            </label>
                            <input type="text" name='rePassword' className='bg-gray-950 border-b border-orange-500 p-2 focus:outline-none w-full' autoComplete='off'/>
                        </div>
                        <div className='flex flex-col justify-center items-center h-[6%] w-[85%]'>
                            <button type='submit' className='w-full bg-orange-500 text-black rounded h-[100%] hover:bg-yellow-500 font-medium'>Submit</button>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <h4>Already have an account? <button onClick={() => setShowSignUpForm(false)} className='underline text-blue-600'>Login Instead.</button></h4>
                        </div>
                    </form>
                    </div>
                ): (
                    <div className='h-auto w-1/2 flex justify-center items-center'>
                    <form onClick={hanldeModalFormClick} className='h-[70vh] w-[55%] rounded-xl shadow-dense bg-gray-950 flex flex-col gap-10 px-4 py-2 items-center relative' >
                        <div onClick={() => {formModalRef.current.classList.remove('hidden'); formModalRef.current.classList.add('hidden');}} className='absolute top-4 right-4'>
                            <FontAwesomeIcon icon={faXmark} className='hover:text-white cursor-pointer'/>
                        </div>
                        <div className='mb-4 mt-2'>
                            <h1 className='text-2xl text-center font-bold text-gray-200'>Sign In From Here</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <label htmlFor="username" className='flex gap-1 justify-center items-center self-start text-gray-300'>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Username</span>
                            </label>
                            <input type="text" name='username' className='bg-gray-950 border-b border-orange-500 p-2 focus:outline-none w-full' autoComplete='off'/>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <label htmlFor="username" className='flex gap-1 justify-center items-center self-start text-gray-300'>
                                <FontAwesomeIcon icon={faKey} />
                                <span>Password</span>
                            </label>
                            <input type="password" name='password' className='bg-gray-950 border-b border-orange-500 p-2 focus:outline-none w-full' autoComplete='off'/>
                        </div>
                        <div className='flex flex-col justify-center items-center h-[6%] w-[85%]'>
                            <button type='submit' className='w-full bg-orange-500 text-black rounded h-[100%] hover:bg-yellow-500 font-medium'>Submit</button>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[85%]'>
                            <h4>Don't have an account? <button onClick={() => setShowSignUpForm(true)} className='underline text-blue-600'>Sign Up Instead.</button></h4>
                        </div>
                    </form>
                </div>
                )}  
                


            </div>
        </div>
    </div>
  )
}   

export default Header
