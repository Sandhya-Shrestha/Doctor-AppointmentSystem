

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
        Contact with us for personalized support and inquiries.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form_label'>
              Your Email
            </label>
            <input
            type="email"
            id="email"
            placeholder='example@gmail.com'
            className='form_input mt-1'
            />
           </div>
           <div>
            <label htmlFor='help' className='form_label'>
              Help
            </label>
            <input
            type="text"
            id="help"
            placeholder='How can we help you'
            className='form_input mt-1'
            />
           </div>
           <div className="sm:col-span-2">
            <label htmlFor='message' className='form_label'>
              Your message to us
            </label>
            <textarea
            rows='6'
            type="text"
            id="message"
            placeholder='Leave you message'
            className='form_input mt-1'
            />
           </div>
           <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact