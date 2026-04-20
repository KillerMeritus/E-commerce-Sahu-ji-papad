import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="container not-found">
      <div className="not-found__code">404</div>
      <h1 className="not-found__title">Oops! Page not found.</h1>
      <p className="not-found__desc">
        Looks like you've wandered off the trail. You won't find any papads here!
      </p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
