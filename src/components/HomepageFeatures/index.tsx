import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built in console',
    Img: require('@site/static/img/console.png').default,
    description: (
      <>
        Duckloader has a built in console, so you can easily interact with your mods and see what is going on.
      </>
    ),
  },
  {
    title: 'Mod settings',
    Img: require('@site/static/img/settings.png').default,
    description: (
      <>
        Duckloader has a built in settings menu, so you can easily change your settings without having to go into the config file.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Img: require('@site/static/img/easy.png').default,
    description: (
      <>
        Duckloader is made to be easy to use, so you can focus on your mods.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  if (!Img) {
    return null;
  }
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureImgWrapper}>
        <img className={styles.featureImg} alt={title} src={Img} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}