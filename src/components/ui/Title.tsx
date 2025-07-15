'use client';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1 className="text-4xl font-bold text-white  mb-4 text-center">
      {title}
    </h1>
  );
} 