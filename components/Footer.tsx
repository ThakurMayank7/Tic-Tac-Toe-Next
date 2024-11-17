import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container mx-auto text-center">
            <p className="text-sm">Created by <strong>Mayank Singh</strong></p>
            <div className="flex justify-center space-x-4 mt-2">
              {/* <!-- LinkedIn Link with Icon --> */}
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              {/* <!-- GitHub Link with Icon --> */}
              <a href="https://github.com/thakurmayank5" target="_blank" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
    </footer>
  )
}

export default Footer