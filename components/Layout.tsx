import styles from './Layout.module.scss';
import Head from 'next/Head';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/Link';

interface Props {
  children: JSX.Element | JSX.Element[];
  home?: boolean;
};

const name = 'Xiaohan Du';

const Layout = ({ children, home }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {
          home ? (
            <>
              <img src='/images/avatar.jpeg' className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name} />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/avatar.jpeg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )
        }
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
};
export default Layout;