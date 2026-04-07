# Images Folder

Drop your photos here. They'll be served at `/images/...` in the browser.

## Folder structure

```
public/
  images/
    profile/        ← Profile photo (e.g. snehal.jpg)
    campaigns/      ← Campaign screenshots / thumbnails
                       kesari2.jpg
                       sharktank.jpg
                       baalveer.jpg
                       sargampa.jpg
                       didsupermoms.jpg
```

## How to use in components

```tsx
import Image from 'next/image';

// Profile photo
<Image src="/images/profile/snehal.jpg" alt="Snehal Yelle" width={76} height={76} />

// Campaign image
<Image src="/images/campaigns/kesari2.jpg" alt="Kesari 2 Campaign" width={400} height={180} />
```

## Recommended sizes

| Use             | Recommended size |
|-----------------|-----------------|
| Profile avatar  | 200×200 px      |
| Campaign card   | 800×400 px      |
| OG image        | 1200×630 px     |
