import { MdClose } from 'react-icons/md';
import ModalOverlay from '../shared/modalOverlay';
import Image, { StaticImageData } from 'next/image';

interface DisplayImagesModalProps {
	images: string[] | StaticImageData[];
	closeModal: () => void;
}

const DisplayImagesModal = ({ images, closeModal }: DisplayImagesModalProps) => {
	return (
		<ModalOverlay width={900}>
			<div className="flex flex-col overflow-y-scroll max-h-[85vh]">
				<button className="text-[#7EB693] font-bold mb-4 self-end" onClick={closeModal}>
					<MdClose size={28} />
				</button>
				<div className="space-y-8">
					{images?.map((image, index) => (
						<div key={index} className="relative">
							<Image
								src={image}
								alt={`Image ${index + 1}`}
								className="w-full object-cover rounded-lg"
							/>
						</div>
					))}
				</div>
			</div>
		</ModalOverlay>
	);
};

export default DisplayImagesModal;
