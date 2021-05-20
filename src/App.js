import './App.css';
// Components
import Button from './components/Button';
import Product from './components/Product';
import Tile from './components/Tile';
//Images
import theHandyBag from './assets/bag_1.png';
import theStylishBag from './assets/bag_2.png';
import theSimpleBag from './assets/bag_3.png';
import theTrendyBag from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

const buttonHandler = (event) => {
  console.log(event.target.innerHTML);
}

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
          buttonText="to the collection"
          isButtonDisabled={false}
          buttonHandler={buttonHandler}
        />
        <Button
          buttonText="shop all bags"
          isButtonDisabled={false}
          buttonHandler={buttonHandler}
        />
        <Button
          buttonText="pre-orders"
          isButtonDisabled={true}
          buttonHandler={buttonHandler}
        />
      </nav>
      <main>
        <Product 
          productLabel="Best seller"
          productImage={theHandyBag}
          productImageDescription="handy bag"
          productName="The handy bag"
          productPrice="€400,-"
        />
        <Product 
          productLabel="Best seller"
          productImage={theStylishBag}
          productImageDescription="stylish bag"
          productName="The stylish bag"
          productPrice="€250,-"
        />
        <Product 
          productLabel="New collection"
          productImage={theSimpleBag}
          productImageDescription="simple bag"
          productName="The simple bag"
          productPrice="€300,-"
        />
        <Product 
          productLabel="New collection"
          productImage={theTrendyBag}
          productImageDescription="trendy bag"
          productName="The trendy bag"
          productPrice="€150,-"
        />
      </main>
      <footer>
        <Tile 
          tileTitle="The brand"
          tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus aliquam massa rhoncus auctor. Suspendisse ultrices, tellus nec ornare accumsan, lorem leo viverra neque, a lobortis ipsum ipsum vel tellus. Curabitur lobortis vitae ipsum vitae consequat. Sed interdum, dui at imperdiet commodo, sapien odio auctor erat, ac feugiat purus arcu a leo. Nullam metus dolor, rutrum in scelerisque quis, lobortis in felis. Donec diam dui, posuere mattis commodo et, posuere et massa. Pellentesque cursus efficitur tortor, non accumsan ipsum semper et. Morbi consequat libero vitae interdum viverra. Nullam sed lorem at diam ultricies semper. "
        />
        <Tile 
          tileImage={brand}
        />
        <Tile 
          tileImage={ourStory}
        />
        <Tile 
          tileTitle="Our story"
          tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec purus aliquam massa rhoncus auctor. Suspendisse ultrices, tellus nec ornare accumsan, lorem leo viverra neque, a lobortis ipsum ipsum vel tellus. Curabitur lobortis vitae ipsum vitae consequat. Sed interdum, dui at imperdiet commodo, sapien odio auctor erat, ac feugiat purus arcu a leo. Nullam metus dolor, rutrum in scelerisque quis, lobortis in felis. Donec diam dui, posuere mattis commodo et, posuere et massa. Pellentesque cursus efficitur tortor, non accumsan ipsum semper et. Morbi consequat libero vitae interdum viverra. Nullam sed lorem at diam ultricies semper. "
        />
      </footer>
    </>
  );
}

export default App;



