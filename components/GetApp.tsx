import React from 'react';

const ContactForm = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center" style={{marginBottom:'100px'}}>Contact Us</h1>
        <div className="relative h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0 2px 15px -3px rgba(0,0,0,0.07),0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                id="exampleInput90"
                placeholder="Name"
                />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                      id="exampleInput90"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Your message"
                    ></textarea>
                    
                  </div>
                  <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-700 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px 0px 0px 13px transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px 0px 0px 13px rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color 0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px 0px 0px 13px rgba(0,0,0,0.6)] focus:before:transition-[box-shadow 0.2s,transform 0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px 0px 0px 13px #3b71ca] checked:focus:before:transition-[box-shadow 0.2s,transform 0.2s] checked:focus:after:absolute checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-gray-400 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px 0px 0px 13px rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px 0px 0px 13px #3b71ca]"
  type="checkbox"
  value=""
  id="exampleCheck96"
  defaultChecked
/>

                    <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0 4px 9px -4px #3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] dark:shadow-[0 4px 9px -4px rgba(59,113,202,0.5)] dark:hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:active:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] lg:mb-0"
>
  Send
</button>

                </form>
              </div>
              <div className="w-full lg:w-7/12">
  <div className="flex flex-wrap">
    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="mb-2 font-bold dark:text-white">Technical support</p>
          <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
          <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="mb-2 font-bold dark:text-white">Technical support</p>
          <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
          <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="mb-2 font-bold dark:text-white">Technical support</p>
          <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
          <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
        </div>
      </div>
    </div>
    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <div className="flex items-start">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="ml-6">
          <p className="mb-2 font-bold dark:text-white">Technical support</p>
          <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
          <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
        </div>
      </div>
    </div>
    {/* Add another section similar to the one above */}
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
