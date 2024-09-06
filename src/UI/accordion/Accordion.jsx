import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

import selectLang from '../../modules/selectLang';

const Item = ({ item, i, expanded, setExpanded }) => {
	const isOpen = i === expanded;
	const lang = selectLang(window.location.pathname.split('/'));

	return (
		<div className="accordion__item">
			<motion.div className="accordion__header" initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
				<div className={`accordion__icon${isOpen ? ' active' : ''}`}></div>
				{item.head[lang]}
			</motion.div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<div className="accordion__body">{item.body[lang]}</div>
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
};

export const Accordion = ({ items }) => {
	// This approach is if you only want max one section open at a time. If you want multiple
	// sections to potentially be open simultaneously, they can all be given their own `useState`.
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="accordion">
			{items.map((item, ind) => (
				<Item key={ind} item={item} i={ind} expanded={expanded} setExpanded={setExpanded} />
			))}
		</div>
	);
};

export default Accordion;
