'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/redux/hooks";
import trangChuVienrDarkMode from "@/public/images/home/trang-chu-dark-mode.svg"
import trangChuVienrLightMode from "@/public/images/home/trang-chu-light-mode.svg"


export default function Home() {

	const isDark = useAppSelector(state => state.darkModeReducer.isDark)

	return (
		<main>
			<div className='container py-20'>

				{/* Section intro */}
				<section id='intro' className="grid grid-cols-1 lg:grid-cols-12">

					<div className="col-span-7 flex items-center justify-start">
						<div className="w-full text-center md:text-left">

							{/* Title */}
							<h1 className="scroll-m-20 text-5xl font-bold tracking-tight md:text-7xl dark:text-gray-50 animate__animated animate__fadeInLeft">
								Vienr Food
							</h1>

							{/* Text */}
							<div className="text-lg md:text-xl mt-5 animate__animated animate__fadeInLeft md:w-11/12" style={{ lineHeight: '35px' }}>
								<p className='my-4'>
									Chào mừng các bạn đến với website <b>vienrfood.com</b>!
								</p>
								<p className='my-4 text-justify'>
									Nơi chúng tôi chia sẻ kiến thức và giải pháp để thiết lập, duy trì một hệ thống an toàn thực phẩm cho các doanh nghiệp kinh doanh sản xuất thực phẩm.
								</p>
								<p className='my-4 text-justify'>
									Với những bài viết chuyên sâu và thực tế, cũng như cập nhật thông tin mới nhất về các yêu cầu vận hành hệ thống an toàn thực phẩm phù hợp với một số tiêu chuẩn toàn cầu như <i>Cục quản lý thực phẩm và dược phẩm Hoa Kỳ (FDA)</i>, <i>Tổ chức sáng kiến an toàn thực phẩm toàn cầu (GFSI)</i> hay <i>Hiệp hội bán lẻ toàn cầu Anh Quốc (BRC)</i>, bạn sẽ tìm thấy các hướng dẫn để văn bản hóa các chương trình tiên quyết, đánh giá rủi ro, phân tích mối nguy và xu hướng văn hóa an toàn thực phẩm...
								</p>
								<p className='my-4 text-justify'>
									Bất kể bạn là một chủ nhà hàng thực phẩm, nhà sản xuất, nhân viên quản lý hay chỉ đơn giản là người quan tâm đến an toàn thực phẩm, chúng tôi hy vọng rằng website của chúng tôi sẽ trở thành nguồn tài nguyên hữu ích và đáng tin cậy cho bạn. Cảm ơn bạn đã ghé thăm!
								</p>
							</div>

							{/* Button Blog */}
							<Link href="/blogs">
								<Button variant="vienr" className='mt-5 text-base md:text-md animate__animated animate__fadeInLeft shadow-lg font-semibold px-10 py-6 rounded-full'>
									Blog
								</Button>
							</Link>
						</div>
					</div>

					{/* Home page image */}
					<div className="col-span-5 mt-20">
						{isDark
							? <Image
								src={trangChuVienrDarkMode}
								alt='Vienr Home page image'
								width={700}
							/>
							: <Image
								src={trangChuVienrLightMode}
								alt='Vienr Home page image'
								width={700}
							/>
						}
					</div>
				</section>
			</div>
		</main>
	)
}
