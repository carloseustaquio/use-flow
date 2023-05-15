import styles from './layout.module.css';

export const metadata = {
  title: 'Flow Page',
  description: 'This page is part of an active flow',
}

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<main className={styles.main}>{children}</main>
  )
}

