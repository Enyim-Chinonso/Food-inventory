// 'use client'

// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'

// export default function LoginPage() {
//   const cardRef = useRef(null)

//   useEffect(() => {
//     gsap.from(cardRef.current, {
//       opacity: 0,
//       y: 60,
//       duration: 1,
//       ease: 'power3.out',
//     })
//   }, [])

//   return (
//     <section
//       className="d-flex align-items-center justify-content-center"
//       style={{ minHeight: '100vh', paddingTop: '120px', backgroundColor: '#f0f0f0' }}
//     >
//       <div className="container mb-5">
//         <div className="row justify-content-center">
//           <div className="col-md-5 col-lg-4">
//             <div
//               ref={cardRef}
//               className="card shadow-lg border-0 rounded-4"
//             >
//               <div className="card-body p-4 p-md-5 ">
//                 {/* Header */}
//                 <div className="text-center mb-4">
//                   <h4 className="fw-bold">Welcome Back</h4>
//                   <p className="text-muted small">
//                     Sign in to manage your inventory
//                   </p>
//                 </div>

//                 {/* Form */}
//                 <form>
//                   <div className="mb-3">
//                     <label htmlFor='email' className="form-label small">
//                       Email Address
//                     </label>
//                     <input id='email'
//                       type="email"
//                       className="form-control form-control-lg"
//                       placeholder="you@example.com"
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor='password' className="form-label small">
//                       Password
//                     </label>
//                     <input id='password'
//                       type="password"
//                       className="form-control form-control-lg"
//                       placeholder="enter your password"
//                       required
//                     />
//                   </div>

//                   <div className="d-flex justify-content-between align-items-center mb-4 small">
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="rememberMe"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="rememberMe"
//                       >
//                         Remember me
//                       </label>
//                     </div> 

//                     <a href="/forgot-password" className="text-decoration-none">
//                       Forgot password?
//                     </a>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-dark w-100 btn-lg"
//                   >
//                     Login
//                   </button>
//                 </form>

//                 {/* Footer */}
//                 <div className="text-center mt-4 small">
//                   Don’t have an account?{' '}
//                   <a href="/register" className="fw-semibold">
//                     Create one
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

export default function LoginPage() {
  const cardRef = useRef(null)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)

    // 🔹 Mock authentication (replace with API later)
    setTimeout(() => {
      router.push('/dashboard-select')
    }, 800)
  }

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        paddingTop: '120px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-4">
            <div
              ref={cardRef}
              className="card shadow-lg border-0 rounded-4"
            >
              <div className="card-body p-4 p-md-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <h4 className="fw-bold">Welcome Back</h4>
                  <p className="text-muted small">
                    Sign in to manage your inventory
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label small">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label small">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4 small">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>

                    <a
                      href="/forgot-password"
                      className="text-decoration-none"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark w-100 btn-lg"
                    disabled={loading}
                  >
                    {loading ? 'Signing in…' : 'Login'}
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-4 small">
                  Don’t have an account?{' '}
                  <a href="/register" className="fw-semibold">
                    Create one
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
