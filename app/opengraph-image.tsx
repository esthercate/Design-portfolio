import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Catherine Vuthi — Websites That Grow Your Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
	const photoBuffer = await readFile(
		join(process.cwd(), 'public/images/about-img.jpeg'),
	);

	const photoData = photoBuffer.buffer.slice(
		photoBuffer.byteOffset,
		photoBuffer.byteOffset + photoBuffer.byteLength,
	);

	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				background: 'linear-gradient(135deg, #1e6b3a 0%, #14532d 100%)',
			}}
		>
			{/* Text side */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 20,
					padding: '0 60px',
					width: '58%',
				}}
			>
				<div
					style={{
						color: '#e8f5ec',
						fontSize: 26,
						fontWeight: 600,
						letterSpacing: 3,
						textTransform: 'uppercase',
					}}
				>
					Catherine Vuthi
				</div>
				<div
					style={{
						color: '#ffffff',
						fontSize: 54,
						fontWeight: 800,
						lineHeight: 1.15,
					}}
				>
					Websites That Grow Your Business
				</div>
				<div
					style={{
						color: '#e8f5ec',
						fontSize: 24,
						fontWeight: 400,
					}}
				>
					Custom web development &amp; redesigns for local businesses
				</div>
			</div>

			{/* Photo side */}
			<div
				style={{
					display: 'flex',
					width: '42%',
					height: '100%',
				}}
			>
				<img
					// @ts-expect-error -- satori accepts a raw buffer as an image source
					src={photoData}
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
		</div>,
		{ ...size },
	);
}
