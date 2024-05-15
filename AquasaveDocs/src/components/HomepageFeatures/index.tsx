import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Save water by earning money',
    Svg: require('@site/static/img/peripheric.svg').default,
    description: (
      <>
        AquaSave is an ecosystem that uses IoT and blockchain technologies, and relies on community participation to analyze and track the status of the planet’s water resources.
      </>
    ),
  },
  {
    title: 'Innovative technology for a sustainable world',
    Svg: require('@site/static/img/house.svg').default,
    description: (
      <>
    Thanks to AquaSave’s range of water-related products, significant reduction in water consumption and waste is expected and this will enable more effective policies to be implemented, along with the provision of cryptocurrency rewards.
      </>
    ),
  },
  {
    title: 'DePin Ecosystem',
    Svg: require('@site/static/img/trees.svg').default,
    description: (
      <>
      Aquasave exemplifies how DePIN can revolutionize water management. Using decentralized sensors and blockchain technology, Aquasave collects and analyzes real-time data on water usage and quality. This enables more efficient water resource management by detecting leaks, addressing specific needs in different areas, and optimizing water distribution.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
