// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'aws-s3',
//       providerOptions: {
//         baseUrl: "https://sarah-genge-film-bucket.s3.amazonaws.com",
//         // rootPath: env('CDN_ROOT_PATH'),
//         s3Options: {
//           credentials: {
//             accessKeyId: env('AWS_ACCESS_KEY_ID'),
//             secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
//           },
//           region: "us-east-2",
//           params: {
//             Bucket: "sarah-genge-film-bucket",
//           },
//         },
//       },
//       actionOptions: {
//         upload: {},
//         uploadStream: {},
//         delete: {},
//       },
//     },
//   },
//   'video-thumbnail': {
//     enabled: true,
//   },
// });
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'upload-bunny',
      providerOptions: {
        storageZoneName: env('BUNNY_STORAGE_ZONE_NAME'),
        apiKey: env('BUNNY_API_KEY'),
        region: env('BUNNY_REGION', 'la'),
      },
    },
  },
});