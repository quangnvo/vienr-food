"use client"

import Image from "next/image"
import Link from "next/link"
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/redux/hooks";
import fsmsLightMode from "../../public/images/fsms/fsms-light-mode.svg"
import fsmsDarkMode from "../../public/images/fsms/fsms-dark-mode.svg"

export default function Fsms() {

    interface SmallCardPropsType {
        badgeName: string,
        cardName: string,
        cardHref: string
    }

    interface BigCardPropsType {
        title: string,
        context: string,
        contextAdditional?: string[],
        badgeName: string,
        cardName: string,
        cardHref: string
    }

    // ---------- Render Small Card ----------
    const renderSmallCard = ({ badgeName, cardName, cardHref }: SmallCardPropsType) => {
        return <div className="col-span-4 flex justify-center items-center order-2 md:order-1">
            <Card className="w-80 overflow-hidden shadow-md border border-black dark:border-slate-400">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none bg-slate-900 dark:bg-slate-400"
                >
                    <div className="h-64"></div>
                </CardHeader>

                <CardBody className="p-5 dark:bg-slate-800">
                    <p className="text-2xl font-semibold mt-2 text-primary">
                        {cardName}
                    </p>
                    <div className="mt-5">
                        <Link href={cardHref}>
                            <Button variant="vienr" className="shadow-md font-semibold">
                                Tìm hiểu thêm
                            </Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    }

    // ---------- Render Big Card ----------
    const renderBigCard = ({ title, context, badgeName, cardName, cardHref, contextAdditional }: BigCardPropsType) => {
        return <div className="w-full py-8 rounded-xl mt-10 px-5 md:px-0 bg-slate-100 dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-12">

                {/* Card */}
                {renderSmallCard({ badgeName: badgeName, cardName: cardName, cardHref: cardHref })}

                {/* Nội dung bài */}
                <div className="col-span-8 flex justify-center items-center px-0 md:pr-12 order-1 md:order-2">
                    <div className="px-3 md:px-0">

                        <h2 className="text-3xl font-semibold text-center md:text-left md:mt-0 mt-10 tracking-wide">
                            {title}
                        </h2>

                        <p className="my-5 leading-relaxed text-lg md:text-xl text-justify" style={{ lineHeight: '35px' }}>
                            {context}
                        </p>

                        {contextAdditional
                            ? <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-lg">
                                {contextAdditional.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    }

    const isDark = useAppSelector(state => state.darkModeReducer.isDark)

    return (
        <section id="fsms" className="py-20">
            <div className="container">

                {/* Giới thiệu*/}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* Image */}
                        <div className="col-span-4 flex md:justify-start justify-center order-2 md:order-1 md:py-0 py-10">
                            {isDark
                                ? <Image
                                    src={fsmsDarkMode}
                                    alt='Vienr Home page image'
                                    width={700}
                                />
                                : <Image
                                    src={fsmsLightMode}
                                    alt='Vienr Home page image'
                                    width={700}
                                />
                            }
                        </div>

                        {/* Đôi dòng về FSMS */}
                        <div className="col-span-8 flex justify-center items-center order-1 md:order-2">
                            <div className="md:pl-14">

                                {/* Title */}
                                <h1 className="text-3xl md:pt-0 md:text-4xl font-semibold md:text-left text-center">
                                    Đôi dòng về FSMS
                                </h1>

                                <p className="mt-6 text-lg md:text-xl text-justify" style={{ lineHeight: '35px' }}>
                                    Hệ thống quản lý an toàn thực phẩm (<b>Food safety management system</b> - <b>FSMS</b>) bao gồm các quy trình, chương trình được yêu cầu thực hiện để tạo ra sản phẩm thực phẩm an toàn, hướng tới mục đích đảm bảo rằng thực phẩm không là nguy cơ gây ngộ độc và không dẫn đến bùng phát bệnh đối với người tiêu dùng. Điều này bao gồm quản lý sự cố và nguy cơ tiềm ẩn từ quá trình thu mua nguyên liệu thô cho đến khi phân phối sản phẩm.
                                </p>
                                <p className="mt-6 text-lg md:text-xl" style={{ lineHeight: '35px' }}>
                                    Các yếu tố chính của hệ thống quản lý an toàn thực phẩm bao gồm:
                                </p>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-base md:text-lg">
                                    <li>HACCP - An toàn thực phẩm</li>
                                    <li>PRPs - Các chương trình tiên quyết </li>
                                    <li>TACCP - Phòng vệ thực phẩm </li>
                                    <li>VACCP - Giảm thiểu gian lận</li>
                                    <li>Điều kiện cơ sở và thiết bị phù hợp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HACCP */}
                {renderBigCard({
                    title: "HACCP",
                    context: "HACCP là viết tắt của Hazard Analysis Critical Control Point, nghĩa là phân tích mối nguy và điểm kiểm soát giới hạn. HACCP là tập hợp những nguyên tắc được thiết kế để ngăn ngừa rủi ro về an toàn thực phẩm trong quá trình chế biến sản phẩm thực phẩm.",
                    badgeName: "HACCP",
                    cardName: "HACCP",
                    cardHref: "/fsms/haccp"
                })}


                {/* PRPs */}
                {renderBigCard({
                    title: "PRPs - Các chương trình tiên quyết",
                    context: "Theo Tổ chức Lương thực và Nông nghiệp, các chương trình tiên quyết (PRP - Prerequisite Programme) được ISO định nghĩa là các điều kiện và hoạt động cơ bản cần thiết trong một tổ chức và trong toàn bộ chuỗi thực phẩm để duy trì an toàn thực phẩm. Hay có thể hiểu đây là các chương trình bổ trợ nhưng cần thiết để thực hiện các chương trình an toàn thực phẩm, giảm thiểu gian lận thực phẩm và phòng vệ thực phẩm. Ví dụ về các chương trình tiên quyết là:",
                    badgeName: "PRPs",
                    cardName: "Chương trình tiên quyết",
                    cardHref: "/fsms/prps",
                    contextAdditional: ["Thực hành sản xuất tốt (GMP)", "Thực hành nông nghiệp tốt (GAP)", "Thực hành vệ sinh tốt (GHP)"]
                })}

                {/* VACCP */}
                {renderBigCard({
                    title: "VACCP",
                    context: "VACCP là viết tắt của cụm từ Vulnerability Assessment and Critical Control Points, nghĩa là Đánh giá lỗ hổng và các điểm kiểm soát tới hạn. Các từ viết tắt VACCP được thiết kế để thúc đẩy sự quen thuộc của ngành công nghiệp thực phẩm với HACCP. Tuy nhiên điểm kiểm soát tới hạn trong VACCP là các sự cố an toàn của cơ sở và nên hiểu là “các mối đe dọa giả mạo có ác ý (phòng vệ thực phẩm)”.",
                    badgeName: "VACCP",
                    cardName: "VACCP",
                    cardHref: "/fsms/vaccp"
                })}

                {/* TACCP */}
                {renderBigCard({
                    title: "TACCP",
                    context: "TACCP là viết tắt của cụm từ Threat Assessment and Critical Control Points, nghĩa là Đánh giá mối đe dọa và các điểm kiểm soát tới hạn. Cũng như VACCP, cụm từ viết tắt TACCP được thiết kế để thúc đẩy sự quen thuộc của ngành công nghiệp thực phẩm với HACCP. Trong TACCP, các điểm kiểm soát tập trung vào sự cố an toàn chuỗi cung ứng và cơ sở. Và tốt hơn, nên hiểu các điểm kiểm soát trong TACCP là “Các lỗ hổng dễ bị gian lận thực phẩm” do mục đích kinh tế.",
                    badgeName: "TACCP",
                    cardName: "TACCP",
                    cardHref: "/fsms/taccp"
                })}

                {/* VHATTP */}
                {renderBigCard({
                    title: "Văn hóa an toàn thực phẩm",
                    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    badgeName: "VHATTP",
                    cardName: "Văn hóa ATTP",
                    cardHref: "/fsms/van-hoa-an-toan-thuc-pham"
                })}
            </div>
        </section>
    )
}
