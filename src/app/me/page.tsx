'use client';

import Image from 'next/image';

export default function page() {
  return (
    <section className="my-container mx-auto mt-10 dark:text-gray-200">
      <div className="flex md:flex-row flex-col">
        <div className="w-[40%] mx-auto">
          <Image src="/icon.png" alt="Logo" width={300} height={200} />
        </div>
        <div className="w-[40%] mx-auto">
          <p>
            Salve, nomen meum Ridwan R Siddiq. Nescio quomodo me describere. Instead of Lorem Ipsum uteretur, melius esset si
            haec epistula aliquam significationem habuisset. Scribo codice ac vasa. Quia non satis erat, Lorem Ipsum adieci.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit, in officia a quod animi cum ex
            laudantium sapiente veritatis asperiores quis vitae, optio architecto dolor. Cumque porro eius doloribus eos
            quibusdam. Placeat repudiandae inventore, impedit distinctio praesentium deserunt. Quia quam, ex sunt
            necessitatibus inventore vero praesentium alias eveniet dolor,
          </p>
        </div>
      </div>
    </section>
  );
}
