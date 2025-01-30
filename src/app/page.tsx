export default function Home() {
  const repos = [
    '2025-hungrito-food-fest-7.0',
    '2024-Merriage-photos-2',
    'Binalben-na-Marriage',
    '2025-Manjukaki-Harikaka-50th-anniversary',
    'kana-no-bday',
    '2025-Heritage-walk',
    '2021-Dhaval-potrait-photos',
    '2022-old-minecraft-thumbnails',
    '2024-Vasu-birthday',
    '2024-Navratri-Day-1',
    '2024-Navratri-Edited-Photos',
    '2024-Navratri-Day-9',
    '2024-Navratri-Day-6',
    '2024-Navratri-Day-5-Original',
    '2024-Shreyas-birthday-and-my-first-day-at-TR',
    '2024-Saputara-Trip'
  ];

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
