export default function Home() {
  const repos = [
    'adival-prewedding',
    '2023-Engagement-party',
    '2023-My-Birthday-Celebration-in-Office',
    '2023-Ravimamas-marriage',
    '2023-Mummy-Pappa-Marrige-Album',
    '2023-Uttrayan',
    '2023-Valentine-s-Day',
    '2023-SGL-Late-night-working-TCS-Project',
    '2023-Meeting-with-Ridhdhi',
    '2023-Exatra-photos-with-Aditi',
    '2023-Push-in-boots-the-last-wish',
    '2023-Keval-s-Tour',
    'Shreya-s-Farwell',
    'navratri-2024',
    'Aditi-With-Her-Friends-Stree-2',
    '2022-Adival-Kankupagla',
    '2024-Navratri-Dashera-Mandli',
    '2024-Navratri-Day-8',
    '2024-Navratri-Day-5',
    '2024-Navratri-Day-4',
    'Darshna-AI-new',
    'manali-merriage-photos',
    '2025-hungrito-food-fest-7.0',
    '2024-Merriage-photos-2',
    'Binalben-na-Marriage',
    '2025-Manjukaki-Harikaka-50th-anniversary'
  ,
  'test-git-1---Copy---Copy'];

return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <ul className="w-full max-w-5xl space-y-4">
        {repos.map(repo => (
          <li key={repo} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <a href={`/nextjs_image_gallary_test_5/${repo}`} className="text-blue-600 hover:text-blue-800 font-mono text-sm">
              {repo}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
