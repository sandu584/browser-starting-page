import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer.jsx'
import { useSelector } from 'react-redux';
import LinkComponent from './components/LinkComponent.jsx';


function App() {
	const bgLinks = useSelector(state => state.bgImages);
	const websiteLinks = useSelector(state => state.links);
	const [currentBgImage, setCurrentBgImage] = useState(bgLinks[4]);
	let id = useRef(0);

	useEffect(() => {
		let timeInterval = setInterval(() => {
			setCurrentBgImage(bgLinks[id.current]);
			id.current = (id.current + 1) % bgLinks.length;
		}, 3000);

		return (() => clearInterval(timeInterval));
	}, [bgLinks])

	return (
		<div
			className='h-screen w-full text-white bg-cover bg-center bg-no-repeat flex justify-between items-center flex-col transition-all ease-in-out duration-500'
			style={{ backgroundImage: `url(${currentBgImage})` }}
		>
			<div className='h-full w-5/8 p-5 overflow-auto flex justify-around items-center flex-wrap'>
				{
					websiteLinks.map((link) => (
						<LinkComponent key={link.id} link={link} />
					))
				}
			</div>
			<Footer />
		</div>
	)
}

export default App;