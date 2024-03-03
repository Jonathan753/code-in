import Image from "next/image";
import styles from "../../../styles/page.module.css";
import MainContainer from "../../../components/MainContainer";

export const metadata = {
  title: 'Code-in: Cliente',
  keywords: 'Cliente'
}

// // export async function getStaticProps(){
// //   const data = await fetch('lugar que vai pegar')

// //   const client = await data.json()

// //   return {
// //     props: {clients}
// //   }
// }

export default function Client() {
  return (
    <>
      <MainContainer>

        <section className={styles.section}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
          </table>
        </section>
      </MainContainer>
    </>
  );
}
