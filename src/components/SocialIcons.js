const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/yousufkhan107">
        <i className="fa-brands fa-github" aria-hidden="true" title="Yousuf Khan's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/yousuf-khan-a7332224a/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Yousuf Khan's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/yousuf.khan09/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Yousuf Khan's Instagram Profile"></i>
      </a>
     
    </div>
  );
};

export default SocialIcons;
