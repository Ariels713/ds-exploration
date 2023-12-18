/* eslint-disable @next/next/no-img-element */
import GridLayout from "../../components/grid-layout";
import GridLayoutAutoFit from "../../components/grid-layout-auto-fit/GridLayoutAutoFit";
import GridLayoutBreakout from "../../components/grid-layout-breakout/GridLayoutBreakout";
import GridLayoutColumn from "../../components/grid-layout-column";
import Image from "next/image";
export default function Home({ section }) {
  return (
    <div className="container">
      <h1>Grid Utilities</h1>
      <hr></hr>
      <GridLayout>
        <h3>grid-layout</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>Neque, enim quas?</p>
        <p>Aspernatur, corrupti tempora?</p>

        <GridLayout>
          <h3>grid-layout</h3>
          <p>Lorem, ipsum dolor.</p>
          <p>Neque, enim quas?</p>
          <p>Aspernatur, corrupti tempora?</p>
        </GridLayout>
      </GridLayout>

      {/* <GridLayoutColumn utilityClass="debugger">
        <h3>grid-layout--column</h3>
        <p>Lorem, ipsum dolor.</p>
        <p>Neque, enim quas?</p>
        <p>Aspernatur, corrupti temp?</p>
      </GridLayoutColumn> */}

      {/* <div>
        <h3 className="breakout">grid-layout--auto-fit</h3>
        <GridLayoutAutoFit utilityClass="debugger">
          <div />
          <div />
          <div />
        </GridLayoutAutoFit>
      </div> */}

      {/* <GridLayoutBreakout styleProps={{ "--grid-gap": "3" }}>
        <h2>The Purge: Unmasking the Terror</h2>
        <p>
          The Purge is a renowned American horror film. With its thrilling
          concept, it swept through theaters, marking a unique spot for horror
          and thrill.
        </p>
        <img
          className="ds-breakout"
          src="https://images.pexels.com/photos/14686115/pexels-photo-14686115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="demo"
        />
        <p>
          Through the lens of horror, The Purge shines unsettling light on
          humanity&rsquo;s inherent violence when unmoored from the restraints
          of law and order. It is a chilling tale of survival, morality, and
          human nature&rsquo;s darkest corners.
        </p>
      </GridLayoutBreakout> */}
    </div>
  );
}
