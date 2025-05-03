const Logo = ({ className = '', ...props }) => (
  <img
    src="/formixcode-logo.webp"
    alt="Formix Logo"
    width="20"
    style={{ height: 'auto' }}
    className={className}
    {...props}
  />
)

export default Logo
