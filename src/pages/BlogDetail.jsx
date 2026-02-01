const BlogDetail = () => {
  return (
    <main className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="text-black dark:text-white
    bg-transparent dark:bg-transparent
    md:bg-white md:dark:bg-gray-900 
    md:rounded-xl md:shadow-lg 
    md:p-4"
        >
          {/* Judul Blog */}
          <h2 className="mb-6 font-bold text-xl font-sans text-start">Mengapa desain grafis penting di era digital saat ini?</h2>

          {/* Foto + Info Penulis */}
          <div className="flex  items-center md:items-start gap-4 mb-2">
            <img src="/public/assets/profile.jpg" alt="Foto Penulis" className="w-16 h-16 object-cover rounded-full " />

            <div className="text-left">
              <h3 className="text-lg font-bold font-sans">Hans Rafa</h3>
              <p className="text-gray-400 font-semibold font-sans dark:text-gray-300">Mahasiswa Desain Grafis Polimedia Kreatif</p>
            </div>
          </div>

          {/* Konten Blog */}
          {/* Artikel */}
          <article>
            <div className="relative ">
              <p className="text-gray-400 font-semibold font-sans md:text-lg leading-relaxed ">
                Menurut saya, desain grafis memiliki peran besar di era digital sekarang. Kalau dulu orang mungkin melihat desain hanya sebatas mempercantik tampilan, sekarang fungsinya jauh lebih luas. Desain grafis bisa dikatakan menjadi
                bahasa visual yang membantu kita menyampaikan ide dengan cara yang lebih jelas dan menarik. Saya juga menyadari bahwa desain grafis tidak bisa berjalan sendiri. Ia baru terasa kuat ketika dikombinasikan dengan bidang lain.
                Contohnya saat dipadukan dengan jurnalisme, desain grafis melahirkan profesi seperti layouter atau desainer majalah. Kalau bertemu dengan teknologi informasi, muncul bidang UI/UX yang sekarang sangat penting di aplikasi
                maupun website. Sedangkan ketika bertemu dengan pemasaran, desain grafis berperan dalam membangun branding, membuat konten promosi, hingga menjadi admin media sosial.
              </p>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white dark:from-gray-900 to-transparent flex justify-end"></div>
            </div>

            <img src="/assets/blog1_konten.jpg" alt="Konten Gambar" className="w-full rounded-lg " />
            <figcaption className="font-open-sans italic text-gray-600 dark:text-gray-400 mt-2 text-start mb-4">Gambar hanya pemanis.</figcaption>

            <p className="text-gray-400 font-semibold font-sans md:text-lg leading-relaxed transition-all duration-500">
              Kesimpulannya, bagi saya desain grafis penting di era digital bukan hanya karena tampilan visualnya, tetapi karena perannya sebagai penghubung lintas bidang. Dengan perkembangan yang terus berjalan, saya yakin desain grafis
              akan tetap menjadi profesi yang relevan dan tetap dibutuhkan di masa depan
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
