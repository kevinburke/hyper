window.BENCHMARK_DATA = {
  "lastUpdate": 1617772321032,
  "repoUrl": "https://github.com/kevinburke/hyper",
  "entries": {
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "0fd7d3c3635fa5a6d2d9e9e9471ae43ca3f09cad",
          "message": "fixup benchmark output.txt",
          "timestamp": "2020-11-16T14:31:59-08:00",
          "tree_id": "4a3e2b0368c81605beafc6f4da7026519a929f19",
          "url": "https://github.com/hyperium/hyper/commit/0fd7d3c3635fa5a6d2d9e9e9471ae43ca3f09cad"
        },
        "date": 1605566086676,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 39056,
            "range": "± 8021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "af96ddf008540ca4799381efb16a74af4dc3db28",
          "message": "Use patched GH action",
          "timestamp": "2020-11-16T16:00:07-08:00",
          "tree_id": "69d47e4e3b4989c228904304c3cb8ccbbc865e78",
          "url": "https://github.com/hyperium/hyper/commit/af96ddf008540ca4799381efb16a74af4dc3db28"
        },
        "date": 1605571383508,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43999,
            "range": "± 5706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/hyperium/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605574482544,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 69407,
            "range": "± 11740",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/hyperium/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605638704568,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 38812,
            "range": "± 6297",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/hyperium/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605652402414,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47141,
            "range": "± 3341",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/hyperium/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605661761900,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51407,
            "range": "± 3443",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/hyperium/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605726318291,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 52739,
            "range": "± 1310",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/hyperium/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605739718567,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45058,
            "range": "± 5159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/hyperium/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605809318072,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45042,
            "range": "± 4086",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "751c122589cfd9935e8e3239cd0d692e573784c5",
          "message": "feat(lib): update `bytes` to 0.6, update `http-body` (#2339)\n\nThis branch updates `bytes` and `http-body` to the latest versions. The\r\n`http-body` version that uses `bytes` 0.6 hasn't been released yet, so\r\nwe depend on it via a git dep for now. Presumably Hyper and `http-body`\r\nwill synchronize their releases.\r\n\r\nOther than that, this is a pretty mechanical update. Should fix the\r\nbuild and unblock the `h2` update to use vectored writes.",
          "timestamp": "2020-11-19T16:23:32-08:00",
          "tree_id": "97ddcd8135cc1bf64a6939749febad0836f5276c",
          "url": "https://github.com/hyperium/hyper/commit/751c122589cfd9935e8e3239cd0d692e573784c5"
        },
        "date": 1605831968329,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50639,
            "range": "± 1184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/hyperium/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605832759195,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64749,
            "range": "± 2905",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/hyperium/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606242887705,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49805,
            "range": "± 1295",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@michaelhewson.ca",
            "name": "Michael Hewson",
            "username": "mikeyhew"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db32e1050cf1eae63af0365c97e920f1295b6bea",
          "message": "feat(lib): remove dependency on `tracing`'s `log` feature (#2342)\n\nCloses #2326\r\n\r\nBREAKING CHANGE: hyper no longer emits `log` records automatically.\r\n  If you need hyper to integrate with a `log` logger (as opposed to `tracing`),\r\n  you can add `tracing = { version = \"0.1\", features = [\"log\"] }` to activate them.",
          "timestamp": "2020-11-25T12:41:58-08:00",
          "tree_id": "a5a8bcdeb90b830a90cb60c41ce1bf4eeac4a9e8",
          "url": "https://github.com/hyperium/hyper/commit/db32e1050cf1eae63af0365c97e920f1295b6bea"
        },
        "date": 1606337075730,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 61576,
            "range": "± 14353",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/hyperium/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606337683381,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 52648,
            "range": "± 2181",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/hyperium/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606543037572,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48222,
            "range": "± 2917",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/hyperium/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606744261600,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64366,
            "range": "± 7859",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/hyperium/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606867264899,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67209,
            "range": "± 12534",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jim.holmstroem@gmail.com",
            "name": "Jim Holmström",
            "username": "Jim-Holmstroem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc",
          "message": "docs(examples): gateway: remove extra slash for uri (#2351)\n\nThe PathAndQuery already contains the leading slash, which erroneously\nsets the proxied path to \"//..\" and not \"/..\".",
          "timestamp": "2020-12-03T13:36:32-08:00",
          "tree_id": "4e55ad2349d3c0f604047e8311c6116188a96110",
          "url": "https://github.com/hyperium/hyper/commit/3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc"
        },
        "date": 1607031540500,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66036,
            "range": "± 5936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/hyperium/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607034211374,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 41674,
            "range": "± 5243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/hyperium/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607983194549,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47582,
            "range": "± 4138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/hyperium/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608046428573,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 40809,
            "range": "± 1183",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/hyperium/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608071130727,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48430,
            "range": "± 4431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/hyperium/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608582476207,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43349,
            "range": "± 10967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/hyperium/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608663206849,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 70899,
            "range": "± 18132",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad42acc79b54ce38adf99c58c894f29fa2665ad",
          "message": "feat(lib): Upgrade to Tokio 1.0 (#2369)\n\nCloses #2370",
          "timestamp": "2020-12-23T10:36:12-08:00",
          "tree_id": "a68f91816f1b911d3febd5935d6ced61572b7018",
          "url": "https://github.com/hyperium/hyper/commit/fad42acc79b54ce38adf99c58c894f29fa2665ad"
        },
        "date": 1608748711172,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48023,
            "range": "± 4153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/hyperium/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608750026920,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47425,
            "range": "± 6890",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c97a10612521c7a6e7bcdc4a1d90539fc33a0938",
          "message": "docs(lib): enable doc_cfg on docs.rs builds (#2372)",
          "timestamp": "2020-12-23T12:55:28-08:00",
          "tree_id": "d52617a54b2e520e90a5aabc708a41b251ef8938",
          "url": "https://github.com/hyperium/hyper/commit/c97a10612521c7a6e7bcdc4a1d90539fc33a0938"
        },
        "date": 1608757072980,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50778,
            "range": "± 2095",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/hyperium/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608765729434,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50591,
            "range": "± 2128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nikhil.benesch@gmail.com",
            "name": "Nikhil Benesch",
            "username": "benesch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a59e5fc7ddedcb7cbd91e97b33385fde57aa10",
          "message": "feat(client): expose `connect` types without proto feature (#2377)\n\nMake it possible to refer to Connected, Connection, HttpConnector, etc.\r\nwithout enabling either of the http1/http2 features. This makes feature\r\nselection work better for downstream libraries like hyper-openssl, which\r\ndon't want to commit to any particular protocol.\r\n\r\nFix #2376.",
          "timestamp": "2020-12-28T15:50:28-08:00",
          "tree_id": "45ebc36d02cfce21512ca4f21e0186086b3aca7d",
          "url": "https://github.com/hyperium/hyper/commit/73a59e5fc7ddedcb7cbd91e97b33385fde57aa10"
        },
        "date": 1609199544507,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 44145,
            "range": "± 2651",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/hyperium/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609199665684,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43615,
            "range": "± 2283",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fanatid@ya.ru",
            "name": "Kirill Fomichev",
            "username": "fanatid"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d4fcbee65bebf461291def75f4c512ec62a664",
          "message": "feat(server): expose `Accept` without httpX features (#2382)",
          "timestamp": "2020-12-29T10:19:57-08:00",
          "tree_id": "db446f1dadd4ba7c9cb2342b2f9a33db36b205c5",
          "url": "https://github.com/hyperium/hyper/commit/a6d4fcbee65bebf461291def75f4c512ec62a664"
        },
        "date": 1609266117661,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45862,
            "range": "± 1256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/hyperium/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609268166735,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49950,
            "range": "± 978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/hyperium/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610130506308,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51436,
            "range": "± 5273",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "446dd2f0c70dba22d8d589a68b224c2838a4ddf1",
          "message": "chore(security): add a SECURITY.md policy (#2395)",
          "timestamp": "2021-01-12T14:45:10-08:00",
          "tree_id": "bb354693eb5c0c6bb50733be6b61409e21d6d2a1",
          "url": "https://github.com/hyperium/hyper/commit/446dd2f0c70dba22d8d589a68b224c2838a4ddf1"
        },
        "date": 1610491641104,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 44797,
            "range": "± 2546",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/hyperium/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610497247631,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48603,
            "range": "± 2381",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/hyperium/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610647214656,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47587,
            "range": "± 1136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/hyperium/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610661551243,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43654,
            "range": "± 3673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/hyperium/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610734633145,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 71511,
            "range": "± 8218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/hyperium/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610756775742,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45335,
            "range": "± 5126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/hyperium/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611073945246,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46005,
            "range": "± 1026",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erikdesjardins@users.noreply.github.com",
            "name": "erikdesjardins",
            "username": "erikdesjardins"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9956587f83428a5dbe338ba0b55c1dc0bce8c282",
          "message": "feat(body): reexport `hyper::body::SizeHint` (#2404)",
          "timestamp": "2021-01-19T14:50:07-08:00",
          "tree_id": "56032966673662aaf1b8aa45fabd5895f1546240",
          "url": "https://github.com/hyperium/hyper/commit/9956587f83428a5dbe338ba0b55c1dc0bce8c282"
        },
        "date": 1611096734999,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 44882,
            "range": "± 2242",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/hyperium/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611096859571,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 72190,
            "range": "± 15859",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/hyperium/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611184356853,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50384,
            "range": "± 4236",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/hyperium/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611686379918,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66957,
            "range": "± 9492",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/hyperium/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611871914808,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46165,
            "range": "± 3117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/hyperium/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612287435482,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 67933,
            "range": "± 8886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/hyperium/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612314670615,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46934,
            "range": "± 1025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "48d4594930da4e227039cfa254411b85c98b63c5",
          "message": "v0.14.3",
          "timestamp": "2021-02-05T14:11:35-08:00",
          "tree_id": "d88e7eda40795e66511eaa1d123a313a49dceb2b",
          "url": "https://github.com/hyperium/hyper/commit/48d4594930da4e227039cfa254411b85c98b63c5"
        },
        "date": 1612565531616,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45040,
            "range": "± 4156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710",
          "message": "refactor(client): fix unused Pin import without http2",
          "timestamp": "2021-02-05T15:51:56-08:00",
          "tree_id": "fa9a75ecb484a8ac069e00f1ae3ba10ecc08c5e4",
          "url": "https://github.com/hyperium/hyper/commit/4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710"
        },
        "date": 1612569252292,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48340,
            "range": "± 1261",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/hyperium/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612569562163,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64942,
            "range": "± 16869",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95ce96048cd71fcfa63d75b1caa75ea000292487",
          "message": "test(http1): fix non_fmt_panic warning (#2424)",
          "timestamp": "2021-02-06T07:20:01-08:00",
          "tree_id": "a82efa92576bf667d07a01250dd13e8e54e2de33",
          "url": "https://github.com/hyperium/hyper/commit/95ce96048cd71fcfa63d75b1caa75ea000292487"
        },
        "date": 1612624967978,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 72917,
            "range": "± 10031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/hyperium/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612625913940,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 62223,
            "range": "± 9341",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/hyperium/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612906465242,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 72941,
            "range": "± 11762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/hyperium/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613673503346,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 56357,
            "range": "± 1399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/hyperium/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613771587629,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46170,
            "range": "± 999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/hyperium/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614022565707,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48833,
            "range": "± 2218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a60280873bbfe5c2a2806c88891bf91e3e4c3882",
          "message": "refactor(ffi): Removed need for cbindgen type renames (#2442)\n\nFixes hyperium/hyper#2428",
          "timestamp": "2021-02-22T16:12:06-08:00",
          "tree_id": "9f554a19f8d87074aa036b33399d42eed1a3f3ce",
          "url": "https://github.com/hyperium/hyper/commit/a60280873bbfe5c2a2806c88891bf91e3e4c3882"
        },
        "date": 1614039288229,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51930,
            "range": "± 2781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/hyperium/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614039679083,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 54429,
            "range": "± 8795",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/hyperium/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614395006773,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 75207,
            "range": "± 8913",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/hyperium/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614906368123,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49702,
            "range": "± 2620",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/hyperium/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615242123233,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49300,
            "range": "± 2786",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/hyperium/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615399407163,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51766,
            "range": "± 4321",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/hyperium/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615848180221,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47984,
            "range": "± 2365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/hyperium/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616175674849,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42222,
            "range": "± 6465",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/hyperium/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616451566536,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 62460,
            "range": "± 7893",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/hyperium/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616704605487,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46910,
            "range": "± 2399",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68d4e4a3db91fb43f41a8c4fce1175ddb56816af",
          "message": "feat(client): allow HTTP/0.9 responses behind a flag (#2473)\n\nFixes #2468",
          "timestamp": "2021-03-26T11:25:00-07:00",
          "tree_id": "659e8520b14a640bd1fbf5ccb416cd8911abcb6a",
          "url": "https://github.com/hyperium/hyper/commit/68d4e4a3db91fb43f41a8c4fce1175ddb56816af"
        },
        "date": 1616783248746,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42281,
            "range": "± 5633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "52582625+nylanderdev@users.noreply.github.com",
            "name": "Rasmus Nylander",
            "username": "nylanderdev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "895e4cf3fbb4119daac06ff446c47ac478468c97",
          "message": "refactor(ffi): return null ptr instead of aborting in C API (#2478)\n\nMake C API functions that return pointers return null in case of a\r\npanic, instead of aborting.\r\n\r\nAdd ffi_fn! macro rules that enable default error values to be returned\r\nby writing \"?= <value>\" after an ffi function's body.",
          "timestamp": "2021-03-26T11:26:44-07:00",
          "tree_id": "b6c8e5ea7a1d552350a2986fbc66e3cd784bc782",
          "url": "https://github.com/hyperium/hyper/commit/895e4cf3fbb4119daac06ff446c47ac478468c97"
        },
        "date": 1616783384465,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 63292,
            "range": "± 9994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/hyperium/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616785578755,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 73229,
            "range": "± 16179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/kevinburke/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617772122430,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 39008,
            "range": "± 5288",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "af96ddf008540ca4799381efb16a74af4dc3db28",
          "message": "Use patched GH action",
          "timestamp": "2020-11-16T16:00:07-08:00",
          "tree_id": "69d47e4e3b4989c228904304c3cb8ccbbc865e78",
          "url": "https://github.com/hyperium/hyper/commit/af96ddf008540ca4799381efb16a74af4dc3db28"
        },
        "date": 1605571384450,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59874,
            "range": "± 41739",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/hyperium/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605574492714,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 72933,
            "range": "± 15934",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/hyperium/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605638741076,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58120,
            "range": "± 3037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/hyperium/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605652414646,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56748,
            "range": "± 3644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/hyperium/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605661773401,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58946,
            "range": "± 2463",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/hyperium/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605726333089,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58113,
            "range": "± 6540",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/hyperium/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605739741120,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61873,
            "range": "± 14397",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/hyperium/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605809351375,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 68793,
            "range": "± 13015",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "751c122589cfd9935e8e3239cd0d692e573784c5",
          "message": "feat(lib): update `bytes` to 0.6, update `http-body` (#2339)\n\nThis branch updates `bytes` and `http-body` to the latest versions. The\r\n`http-body` version that uses `bytes` 0.6 hasn't been released yet, so\r\nwe depend on it via a git dep for now. Presumably Hyper and `http-body`\r\nwill synchronize their releases.\r\n\r\nOther than that, this is a pretty mechanical update. Should fix the\r\nbuild and unblock the `h2` update to use vectored writes.",
          "timestamp": "2020-11-19T16:23:32-08:00",
          "tree_id": "97ddcd8135cc1bf64a6939749febad0836f5276c",
          "url": "https://github.com/hyperium/hyper/commit/751c122589cfd9935e8e3239cd0d692e573784c5"
        },
        "date": 1605831974430,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 49395,
            "range": "± 3193",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/hyperium/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605832768799,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 62587,
            "range": "± 31719",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/hyperium/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606242896753,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70158,
            "range": "± 13068",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@michaelhewson.ca",
            "name": "Michael Hewson",
            "username": "mikeyhew"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db32e1050cf1eae63af0365c97e920f1295b6bea",
          "message": "feat(lib): remove dependency on `tracing`'s `log` feature (#2342)\n\nCloses #2326\r\n\r\nBREAKING CHANGE: hyper no longer emits `log` records automatically.\r\n  If you need hyper to integrate with a `log` logger (as opposed to `tracing`),\r\n  you can add `tracing = { version = \"0.1\", features = [\"log\"] }` to activate them.",
          "timestamp": "2020-11-25T12:41:58-08:00",
          "tree_id": "a5a8bcdeb90b830a90cb60c41ce1bf4eeac4a9e8",
          "url": "https://github.com/hyperium/hyper/commit/db32e1050cf1eae63af0365c97e920f1295b6bea"
        },
        "date": 1606337073288,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 51498,
            "range": "± 2449",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/hyperium/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606337705091,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66767,
            "range": "± 5456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/hyperium/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606543049881,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57373,
            "range": "± 3857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/hyperium/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606744254467,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 52963,
            "range": "± 11506",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/hyperium/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606867263763,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53923,
            "range": "± 3136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jim.holmstroem@gmail.com",
            "name": "Jim Holmström",
            "username": "Jim-Holmstroem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc",
          "message": "docs(examples): gateway: remove extra slash for uri (#2351)\n\nThe PathAndQuery already contains the leading slash, which erroneously\nsets the proxied path to \"//..\" and not \"/..\".",
          "timestamp": "2020-12-03T13:36:32-08:00",
          "tree_id": "4e55ad2349d3c0f604047e8311c6116188a96110",
          "url": "https://github.com/hyperium/hyper/commit/3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc"
        },
        "date": 1607031524565,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46887,
            "range": "± 1824",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/hyperium/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607034225663,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58383,
            "range": "± 10065",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/hyperium/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607983196591,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56993,
            "range": "± 11713",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/hyperium/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608046444700,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48130,
            "range": "± 2081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/hyperium/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608071116148,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47699,
            "range": "± 1550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/hyperium/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608582567221,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66918,
            "range": "± 6967",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/hyperium/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608663213941,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58280,
            "range": "± 11591",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad42acc79b54ce38adf99c58c894f29fa2665ad",
          "message": "feat(lib): Upgrade to Tokio 1.0 (#2369)\n\nCloses #2370",
          "timestamp": "2020-12-23T10:36:12-08:00",
          "tree_id": "a68f91816f1b911d3febd5935d6ced61572b7018",
          "url": "https://github.com/hyperium/hyper/commit/fad42acc79b54ce38adf99c58c894f29fa2665ad"
        },
        "date": 1608748734384,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70482,
            "range": "± 21920",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/hyperium/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608750019136,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48144,
            "range": "± 8430",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c97a10612521c7a6e7bcdc4a1d90539fc33a0938",
          "message": "docs(lib): enable doc_cfg on docs.rs builds (#2372)",
          "timestamp": "2020-12-23T12:55:28-08:00",
          "tree_id": "d52617a54b2e520e90a5aabc708a41b251ef8938",
          "url": "https://github.com/hyperium/hyper/commit/c97a10612521c7a6e7bcdc4a1d90539fc33a0938"
        },
        "date": 1608757080933,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54630,
            "range": "± 2462",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/hyperium/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608765717395,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48012,
            "range": "± 3118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nikhil.benesch@gmail.com",
            "name": "Nikhil Benesch",
            "username": "benesch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a59e5fc7ddedcb7cbd91e97b33385fde57aa10",
          "message": "feat(client): expose `connect` types without proto feature (#2377)\n\nMake it possible to refer to Connected, Connection, HttpConnector, etc.\r\nwithout enabling either of the http1/http2 features. This makes feature\r\nselection work better for downstream libraries like hyper-openssl, which\r\ndon't want to commit to any particular protocol.\r\n\r\nFix #2376.",
          "timestamp": "2020-12-28T15:50:28-08:00",
          "tree_id": "45ebc36d02cfce21512ca4f21e0186086b3aca7d",
          "url": "https://github.com/hyperium/hyper/commit/73a59e5fc7ddedcb7cbd91e97b33385fde57aa10"
        },
        "date": 1609199575781,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56545,
            "range": "± 5281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/hyperium/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609199688991,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54328,
            "range": "± 6440",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fanatid@ya.ru",
            "name": "Kirill Fomichev",
            "username": "fanatid"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d4fcbee65bebf461291def75f4c512ec62a664",
          "message": "feat(server): expose `Accept` without httpX features (#2382)",
          "timestamp": "2020-12-29T10:19:57-08:00",
          "tree_id": "db446f1dadd4ba7c9cb2342b2f9a33db36b205c5",
          "url": "https://github.com/hyperium/hyper/commit/a6d4fcbee65bebf461291def75f4c512ec62a664"
        },
        "date": 1609266125174,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47819,
            "range": "± 2437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/hyperium/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609268156943,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46907,
            "range": "± 6921",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/hyperium/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610130511675,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57415,
            "range": "± 1920",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "446dd2f0c70dba22d8d589a68b224c2838a4ddf1",
          "message": "chore(security): add a SECURITY.md policy (#2395)",
          "timestamp": "2021-01-12T14:45:10-08:00",
          "tree_id": "bb354693eb5c0c6bb50733be6b61409e21d6d2a1",
          "url": "https://github.com/hyperium/hyper/commit/446dd2f0c70dba22d8d589a68b224c2838a4ddf1"
        },
        "date": 1610491668708,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56881,
            "range": "± 4922",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/hyperium/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610497261825,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59212,
            "range": "± 20796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/hyperium/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610647236439,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56952,
            "range": "± 14105",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/hyperium/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610661548764,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 48205,
            "range": "± 5654",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/hyperium/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610734639147,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 62912,
            "range": "± 12685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/hyperium/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610756800712,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53650,
            "range": "± 3400",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/hyperium/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611073966934,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53675,
            "range": "± 3673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erikdesjardins@users.noreply.github.com",
            "name": "erikdesjardins",
            "username": "erikdesjardins"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9956587f83428a5dbe338ba0b55c1dc0bce8c282",
          "message": "feat(body): reexport `hyper::body::SizeHint` (#2404)",
          "timestamp": "2021-01-19T14:50:07-08:00",
          "tree_id": "56032966673662aaf1b8aa45fabd5895f1546240",
          "url": "https://github.com/hyperium/hyper/commit/9956587f83428a5dbe338ba0b55c1dc0bce8c282"
        },
        "date": 1611096756448,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55064,
            "range": "± 6123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/hyperium/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611096842028,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53011,
            "range": "± 5625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/hyperium/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611184370564,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59284,
            "range": "± 18434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/hyperium/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611686394024,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 69611,
            "range": "± 25296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/hyperium/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611871937787,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47162,
            "range": "± 2898",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/hyperium/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612287430826,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46561,
            "range": "± 7876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/hyperium/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612314701633,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56293,
            "range": "± 2048",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "48d4594930da4e227039cfa254411b85c98b63c5",
          "message": "v0.14.3",
          "timestamp": "2021-02-05T14:11:35-08:00",
          "tree_id": "d88e7eda40795e66511eaa1d123a313a49dceb2b",
          "url": "https://github.com/hyperium/hyper/commit/48d4594930da4e227039cfa254411b85c98b63c5"
        },
        "date": 1612565568968,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60276,
            "range": "± 13585",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710",
          "message": "refactor(client): fix unused Pin import without http2",
          "timestamp": "2021-02-05T15:51:56-08:00",
          "tree_id": "fa9a75ecb484a8ac069e00f1ae3ba10ecc08c5e4",
          "url": "https://github.com/hyperium/hyper/commit/4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710"
        },
        "date": 1612569290899,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56070,
            "range": "± 4298",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/hyperium/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612569574454,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 62594,
            "range": "± 16772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95ce96048cd71fcfa63d75b1caa75ea000292487",
          "message": "test(http1): fix non_fmt_panic warning (#2424)",
          "timestamp": "2021-02-06T07:20:01-08:00",
          "tree_id": "a82efa92576bf667d07a01250dd13e8e54e2de33",
          "url": "https://github.com/hyperium/hyper/commit/95ce96048cd71fcfa63d75b1caa75ea000292487"
        },
        "date": 1612624967323,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 71225,
            "range": "± 25354",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/hyperium/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612625908034,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53365,
            "range": "± 4897",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/hyperium/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612906464992,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54469,
            "range": "± 4671",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/hyperium/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613673506804,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57609,
            "range": "± 13827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/hyperium/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613771604284,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56235,
            "range": "± 12395",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/hyperium/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614022600336,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 80341,
            "range": "± 26778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a60280873bbfe5c2a2806c88891bf91e3e4c3882",
          "message": "refactor(ffi): Removed need for cbindgen type renames (#2442)\n\nFixes hyperium/hyper#2428",
          "timestamp": "2021-02-22T16:12:06-08:00",
          "tree_id": "9f554a19f8d87074aa036b33399d42eed1a3f3ce",
          "url": "https://github.com/hyperium/hyper/commit/a60280873bbfe5c2a2806c88891bf91e3e4c3882"
        },
        "date": 1614039303386,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 69309,
            "range": "± 27291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/hyperium/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614039696888,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66023,
            "range": "± 14528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/hyperium/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614395000589,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57374,
            "range": "± 4228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/hyperium/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614906389669,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 57518,
            "range": "± 3568",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/hyperium/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615242145465,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 69530,
            "range": "± 27234",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/hyperium/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615399411514,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59704,
            "range": "± 31764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/hyperium/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615848202634,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 63487,
            "range": "± 16941",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/hyperium/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616175705073,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54871,
            "range": "± 4548",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/hyperium/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616451582317,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 67849,
            "range": "± 32642",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/hyperium/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616704614234,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 64259,
            "range": "± 14824",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68d4e4a3db91fb43f41a8c4fce1175ddb56816af",
          "message": "feat(client): allow HTTP/0.9 responses behind a flag (#2473)\n\nFixes #2468",
          "timestamp": "2021-03-26T11:25:00-07:00",
          "tree_id": "659e8520b14a640bd1fbf5ccb416cd8911abcb6a",
          "url": "https://github.com/hyperium/hyper/commit/68d4e4a3db91fb43f41a8c4fce1175ddb56816af"
        },
        "date": 1616783265348,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 54069,
            "range": "± 4186",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "52582625+nylanderdev@users.noreply.github.com",
            "name": "Rasmus Nylander",
            "username": "nylanderdev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "895e4cf3fbb4119daac06ff446c47ac478468c97",
          "message": "refactor(ffi): return null ptr instead of aborting in C API (#2478)\n\nMake C API functions that return pointers return null in case of a\r\npanic, instead of aborting.\r\n\r\nAdd ffi_fn! macro rules that enable default error values to be returned\r\nby writing \"?= <value>\" after an ffi function's body.",
          "timestamp": "2021-03-26T11:26:44-07:00",
          "tree_id": "b6c8e5ea7a1d552350a2986fbc66e3cd784bc782",
          "url": "https://github.com/hyperium/hyper/commit/895e4cf3fbb4119daac06ff446c47ac478468c97"
        },
        "date": 1616783431559,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 65836,
            "range": "± 16777",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/hyperium/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616785586436,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60428,
            "range": "± 15684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/kevinburke/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617772100868,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46548,
            "range": "± 2049",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "af96ddf008540ca4799381efb16a74af4dc3db28",
          "message": "Use patched GH action",
          "timestamp": "2020-11-16T16:00:07-08:00",
          "tree_id": "69d47e4e3b4989c228904304c3cb8ccbbc865e78",
          "url": "https://github.com/hyperium/hyper/commit/af96ddf008540ca4799381efb16a74af4dc3db28"
        },
        "date": 1605571590518,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 132722,
            "range": "± 16591",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11231679,
            "range": "± 2188075",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42847,
            "range": "± 5081",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 253134,
            "range": "± 50058",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51995669,
            "range": "± 2403504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 73491330,
            "range": "± 5068683",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 75099040,
            "range": "± 7369586",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5465725,
            "range": "± 1227984",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49395,
            "range": "± 8944",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 81639,
            "range": "± 7400",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 224091,
            "range": "± 37776",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12655158,
            "range": "± 1663726",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12744688,
            "range": "± 8988030",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12288728,
            "range": "± 9026296",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65842241,
            "range": "± 6875551",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66344191,
            "range": "± 6079532",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6844583,
            "range": "± 1275315",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 93307,
            "range": "± 5680",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 176099,
            "range": "± 39857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2f2ceb24265a7e63601cf1ffde7d586cd666a783",
          "message": "chore(ci): automatically publish benchmarks in a graph",
          "timestamp": "2020-11-16T16:51:30-08:00",
          "tree_id": "5b90f0b2e08fd62a41b6f1f90d45da63bd559713",
          "url": "https://github.com/hyperium/hyper/commit/2f2ceb24265a7e63601cf1ffde7d586cd666a783"
        },
        "date": 1605574650831,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 80607,
            "range": "± 19255",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11142748,
            "range": "± 2664775",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30511,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211258,
            "range": "± 60035",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52791874,
            "range": "± 3145769",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 76846497,
            "range": "± 5930335",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 77577251,
            "range": "± 7428127",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5664720,
            "range": "± 1209271",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 31829,
            "range": "± 4571",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54035,
            "range": "± 6809",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 183562,
            "range": "± 17261",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9854340,
            "range": "± 1338186",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10090010,
            "range": "± 9892214",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9809590,
            "range": "± 10610070",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63177324,
            "range": "± 11005842",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63774634,
            "range": "± 10733731",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6784835,
            "range": "± 1077822",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 63108,
            "range": "± 9599",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 126309,
            "range": "± 16024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "2a19ab74ed69bc776da25544e98979c9fb6e1834",
          "message": "feat(http1): Make HTTP/1 support an optional feature\n\ncc #2251\n\nBREAKING CHANGE: This puts all HTTP/1 methods and support behind an\n  `http1` cargo feature, which will not be enabled by default. To use\n  HTTP/1, add `features = [\"http1\"]` to the hyper dependency in your\n  `Cargo.toml`.",
          "timestamp": "2020-11-17T10:42:20-08:00",
          "tree_id": "9f96eaaa5c228f8eba653b9ef2cfec2d099f3f10",
          "url": "https://github.com/hyperium/hyper/commit/2a19ab74ed69bc776da25544e98979c9fb6e1834"
        },
        "date": 1605638942066,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 141011,
            "range": "± 22273",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 9792586,
            "range": "± 2095655",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 41166,
            "range": "± 7703",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 254162,
            "range": "± 53833",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52013207,
            "range": "± 881214",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 84370132,
            "range": "± 8239613",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 86486654,
            "range": "± 7435911",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4452261,
            "range": "± 1124643",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 43852,
            "range": "± 12136",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 77958,
            "range": "± 12906",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 200091,
            "range": "± 41814",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12067464,
            "range": "± 2187185",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12566806,
            "range": "± 9655577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12186264,
            "range": "± 9710276",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66912837,
            "range": "± 10622283",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66833871,
            "range": "± 11492677",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6971657,
            "range": "± 1552041",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 86745,
            "range": "± 16562",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 161916,
            "range": "± 32086",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "eb092a7b8cdcf16760027522f3ea2e818e138e21",
          "message": "chore(ci): check all feature combinations in CI",
          "timestamp": "2020-11-17T14:30:27-08:00",
          "tree_id": "857a77fb5849465e43aa3949ed1e99e109ca2e95",
          "url": "https://github.com/hyperium/hyper/commit/eb092a7b8cdcf16760027522f3ea2e818e138e21"
        },
        "date": 1605652579342,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 87006,
            "range": "± 9388",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11927923,
            "range": "± 1045584",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34657,
            "range": "± 10809",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 248613,
            "range": "± 14724",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52012130,
            "range": "± 850928",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 76964924,
            "range": "± 2754425",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 75877759,
            "range": "± 3549474",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5573998,
            "range": "± 426065",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34558,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 56265,
            "range": "± 4254",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 184110,
            "range": "± 24613",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10407407,
            "range": "± 867792",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10282145,
            "range": "± 8997840",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10141873,
            "range": "± 9428101",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64344723,
            "range": "± 8247775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65273973,
            "range": "± 11329481",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7107217,
            "range": "± 638185",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68218,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 138215,
            "range": "± 4388",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e55583d30a597884883f1a51b678f5c57c76765",
          "message": "feat(client): Make `client` an optional feature\n\ncc #2223\r\n\r\nBREAKING CHANGE: The HTTP client of hyper is now an optional feature. To\r\n  enable the client, add `features = [\"client\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-17T17:06:25-08:00",
          "tree_id": "a96d23e59a63b4783772da0aa92b70f346ba446c",
          "url": "https://github.com/hyperium/hyper/commit/4e55583d30a597884883f1a51b678f5c57c76765"
        },
        "date": 1605661916967,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 87040,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11155599,
            "range": "± 525128",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31607,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 225219,
            "range": "± 5206",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52793915,
            "range": "± 843387",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 74861785,
            "range": "± 885355",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 75130703,
            "range": "± 1026937",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5506139,
            "range": "± 569589",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35525,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58395,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 192208,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10621795,
            "range": "± 122683",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10735915,
            "range": "± 9260329",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10346962,
            "range": "± 9759279",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65951929,
            "range": "± 3913124",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69571330,
            "range": "± 5394326",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7155803,
            "range": "± 492675",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 66980,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 133244,
            "range": "± 4102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb5e5d6946f4e3f8115a6b1683aff6a04df73de",
          "message": "feat(server): Make the `server` code an optional feature (#2334)\n\ncc #2223 \r\n\r\nBREAKING CHANGE: The HTTP server code is now an optional feature. To\r\n  enable the server, add `features = [\"server\"]` to the dependency in\r\n  your `Cargo.toml`.",
          "timestamp": "2020-11-18T11:02:20-08:00",
          "tree_id": "260a94fe0611cc0d6d30c331e182fd0bfcc347cf",
          "url": "https://github.com/hyperium/hyper/commit/bdb5e5d6946f4e3f8115a6b1683aff6a04df73de"
        },
        "date": 1605726481069,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 87540,
            "range": "± 3599",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 10845586,
            "range": "± 822747",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33745,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 241590,
            "range": "± 18541",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51995012,
            "range": "± 109608",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 75007205,
            "range": "± 4107758",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 74601597,
            "range": "± 3422088",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5367724,
            "range": "± 823706",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36958,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 59554,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 195192,
            "range": "± 3068",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10999072,
            "range": "± 409030",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11136039,
            "range": "± 8516094",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10860245,
            "range": "± 8997839",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 68426704,
            "range": "± 5372140",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68119719,
            "range": "± 7583882",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7145868,
            "range": "± 499387",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 69182,
            "range": "± 5606",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 141079,
            "range": "± 4696",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abb6471690f796e1b96bb2d7b1042f424d69f169",
          "message": "refactor(client): use tokio's TcpSocket for more sockopts (#2335)\n\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-18T14:45:45-08:00",
          "tree_id": "c8d1bedaa9af64428ba5cdc93170b1c62cc3564e",
          "url": "https://github.com/hyperium/hyper/commit/abb6471690f796e1b96bb2d7b1042f424d69f169"
        },
        "date": 1605739896513,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 121352,
            "range": "± 9351",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 10947680,
            "range": "± 1276805",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 41019,
            "range": "± 3522",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 237803,
            "range": "± 65767",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 54353656,
            "range": "± 3997238",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 74063371,
            "range": "± 4939322",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 73584876,
            "range": "± 3870310",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4673657,
            "range": "± 702866",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46325,
            "range": "± 13015",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 78470,
            "range": "± 20131",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 198415,
            "range": "± 19995",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11709572,
            "range": "± 1378385",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11737294,
            "range": "± 8863450",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11424512,
            "range": "± 9279136",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62352317,
            "range": "± 11648069",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63639312,
            "range": "± 7282604",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6606716,
            "range": "± 1299923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 89586,
            "range": "± 24253",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 162348,
            "range": "± 14838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2b22a7f66899d338691552fbcb6c0f2f4e06b9",
          "message": "feat(lib): disable all optional features by default (#2336)\n\nBREAKING CHANGE: All optional features have been disabled by default.",
          "timestamp": "2020-11-19T10:05:39-08:00",
          "tree_id": "6e1ed1ba8f1fec285f11643f67ff48ea7e92a9a5",
          "url": "https://github.com/hyperium/hyper/commit/ed2b22a7f66899d338691552fbcb6c0f2f4e06b9"
        },
        "date": 1605809513651,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 130168,
            "range": "± 19637",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 9344678,
            "range": "± 3182566",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 37078,
            "range": "± 6317",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232295,
            "range": "± 29130",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52004632,
            "range": "± 872862",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 79618993,
            "range": "± 8081246",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 80550587,
            "range": "± 6901944",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4322367,
            "range": "± 1056988",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 44551,
            "range": "± 8902",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 73984,
            "range": "± 9312",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 194918,
            "range": "± 36879",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11394519,
            "range": "± 1721115",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11579119,
            "range": "± 8914019",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11320318,
            "range": "± 9398190",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61835329,
            "range": "± 7704491",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 62418480,
            "range": "± 8671637",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6453074,
            "range": "± 884612",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 82353,
            "range": "± 16330",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 161158,
            "range": "± 26300",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "751c122589cfd9935e8e3239cd0d692e573784c5",
          "message": "feat(lib): update `bytes` to 0.6, update `http-body` (#2339)\n\nThis branch updates `bytes` and `http-body` to the latest versions. The\r\n`http-body` version that uses `bytes` 0.6 hasn't been released yet, so\r\nwe depend on it via a git dep for now. Presumably Hyper and `http-body`\r\nwill synchronize their releases.\r\n\r\nOther than that, this is a pretty mechanical update. Should fix the\r\nbuild and unblock the `h2` update to use vectored writes.",
          "timestamp": "2020-11-19T16:23:32-08:00",
          "tree_id": "97ddcd8135cc1bf64a6939749febad0836f5276c",
          "url": "https://github.com/hyperium/hyper/commit/751c122589cfd9935e8e3239cd0d692e573784c5"
        },
        "date": 1605832110751,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78854,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 9834285,
            "range": "± 446986",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29628,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 223135,
            "range": "± 4758",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51980382,
            "range": "± 935080",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 71272709,
            "range": "± 720560",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 71949421,
            "range": "± 940046",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4612197,
            "range": "± 206226",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33138,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54451,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 171307,
            "range": "± 2323",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9909168,
            "range": "± 47665",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10019587,
            "range": "± 8534479",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9697482,
            "range": "± 8885018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61271804,
            "range": "± 3565355",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 61577147,
            "range": "± 4231635",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6297911,
            "range": "± 363446",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61562,
            "range": "± 767",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 124945,
            "range": "± 1656",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "121c33132c0950aaa422848cdc43f6691ddf5785",
          "message": "feat(upgrade): Moved HTTP upgrades off `Body` to a new API (#2337)\n\nCloses #2086\r\n\r\nBREAKING CHANGE: The method `Body::on_upgrade()` is gone. It is\r\n  essentially replaced with `hyper::upgrade::on(msg)`.",
          "timestamp": "2020-11-19T16:36:12-08:00",
          "tree_id": "33e278842408a37663173a39ba973df4e6786bdc",
          "url": "https://github.com/hyperium/hyper/commit/121c33132c0950aaa422848cdc43f6691ddf5785"
        },
        "date": 1605832886502,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79901,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 11635902,
            "range": "± 1188989",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29876,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219121,
            "range": "± 4441",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52004158,
            "range": "± 129948",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 83677941,
            "range": "± 4448500",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 82646064,
            "range": "± 4125563",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 7149351,
            "range": "± 731409",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33176,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54419,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 169998,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9767195,
            "range": "± 56474",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9868895,
            "range": "± 8618144",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9539172,
            "range": "± 8701804",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63421892,
            "range": "± 3822797",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64837137,
            "range": "± 6365242",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6496951,
            "range": "± 457345",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61508,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 124568,
            "range": "± 1724",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6aadb830072959497f414c01bcdba4c8e681088",
          "message": "perf(lib): re-enable writev support (#2338)\n\nTokio's `AsyncWrite` trait once again has support for vectored writes in\r\nTokio 0.3.4 (see tokio-rs/tokio#3149).\r\n\r\nThis branch re-enables vectored writes in Hyper for HTTP/1. Using\r\nvectored writes in HTTP/2 will require an upstream change in the `h2`\r\ncrate as well.\r\n\r\nI've removed the adaptive write buffer implementation\r\nthat attempts to detect whether vectored IO is or is not available,\r\nsince the Tokio 0.3.4 `AsyncWrite` trait exposes this directly via the\r\n`is_write_vectored` method. Now, we just ask the IO whether or not it\r\nsupports vectored writes, and configure the buffer accordingly. This\r\nmakes the implementation somewhat simpler.\r\n\r\nThis also removes `http1_writev()` methods from the builders. These are\r\nno longer necessary, as Hyper can now determine whether or not\r\nto use vectored writes based on `is_write_vectored`, rather than trying\r\nto auto-detect it.\r\n\r\nCloses #2320 \r\n\r\nBREAKING CHANGE: Removed `http1_writev` methods from `client::Builder`,\r\n  `client::conn::Builder`, `server::Builder`, and `server::conn::Builder`.\r\n  \r\n  Vectored writes are now enabled based on whether the `AsyncWrite`\r\n  implementation in use supports them, rather than though adaptive\r\n  detection. To explicitly disable vectored writes, users may wrap the IO\r\n  in a newtype that implements `AsyncRead` and `AsyncWrite` and returns\r\n  `false` from its `AsyncWrite::is_write_vectored` method.",
          "timestamp": "2020-11-24T10:31:48-08:00",
          "tree_id": "c91fc21aebcb62085b5295b5e9e68c8c5b58242f",
          "url": "https://github.com/hyperium/hyper/commit/d6aadb830072959497f414c01bcdba4c8e681088"
        },
        "date": 1606243055660,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 124257,
            "range": "± 23194",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6809410,
            "range": "± 1936227",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42808,
            "range": "± 10647",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 271843,
            "range": "± 76919",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52002680,
            "range": "± 1245680",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52114287,
            "range": "± 11584591",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58123093,
            "range": "± 6229433",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3672272,
            "range": "± 1385257",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49551,
            "range": "± 13067",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84268,
            "range": "± 24174",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 209831,
            "range": "± 64367",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11555866,
            "range": "± 10208845",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12664220,
            "range": "± 10054418",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11150006,
            "range": "± 9972296",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64958821,
            "range": "± 10893270",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79510116,
            "range": "± 21311059",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6559439,
            "range": "± 1902924",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 91959,
            "range": "± 22679",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 171571,
            "range": "± 39515",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael@michaelhewson.ca",
            "name": "Michael Hewson",
            "username": "mikeyhew"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db32e1050cf1eae63af0365c97e920f1295b6bea",
          "message": "feat(lib): remove dependency on `tracing`'s `log` feature (#2342)\n\nCloses #2326\r\n\r\nBREAKING CHANGE: hyper no longer emits `log` records automatically.\r\n  If you need hyper to integrate with a `log` logger (as opposed to `tracing`),\r\n  you can add `tracing = { version = \"0.1\", features = [\"log\"] }` to activate them.",
          "timestamp": "2020-11-25T12:41:58-08:00",
          "tree_id": "a5a8bcdeb90b830a90cb60c41ce1bf4eeac4a9e8",
          "url": "https://github.com/hyperium/hyper/commit/db32e1050cf1eae63af0365c97e920f1295b6bea"
        },
        "date": 1606337225681,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 74316,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8711371,
            "range": "± 913587",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31642,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 231622,
            "range": "± 6462",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51998532,
            "range": "± 103074",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 60310659,
            "range": "± 2929471",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 61879764,
            "range": "± 2728985",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5531084,
            "range": "± 1004176",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35178,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54690,
            "range": "± 887",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 170225,
            "range": "± 2090",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9622780,
            "range": "± 8827710",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9666014,
            "range": "± 8686225",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9203084,
            "range": "± 8591297",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65393941,
            "range": "± 5379130",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 86643681,
            "range": "± 17333095",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7772759,
            "range": "± 1685539",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 62215,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 123548,
            "range": "± 2257",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a470446deb2cb2c0e3700f67d9f70097d0d7d75f",
          "message": "chore(error): remove undocumented public error module (#2344)",
          "timestamp": "2020-11-25T12:52:07-08:00",
          "tree_id": "c1accd6ae40bf4b1a972ba66ccfaa01429845765",
          "url": "https://github.com/hyperium/hyper/commit/a470446deb2cb2c0e3700f67d9f70097d0d7d75f"
        },
        "date": 1606337868668,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 126315,
            "range": "± 27268",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6361287,
            "range": "± 1460728",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42809,
            "range": "± 9231",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 243306,
            "range": "± 53715",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52009956,
            "range": "± 1258334",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51397379,
            "range": "± 11238658",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57886323,
            "range": "± 7972077",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3466456,
            "range": "± 915553",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49796,
            "range": "± 12078",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80031,
            "range": "± 16978",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 201556,
            "range": "± 36775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11508105,
            "range": "± 9872414",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11698574,
            "range": "± 10045719",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11196271,
            "range": "± 9616921",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64603686,
            "range": "± 11814297",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75051491,
            "range": "± 14529573",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6420470,
            "range": "± 1389373",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 92778,
            "range": "± 24078",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 173534,
            "range": "± 40311",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert@octarineparrot.com",
            "name": "Robert Clipsham",
            "username": "mrmonday"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ba2a141a6f8736446ff4a0111df347c0dc66f6c",
          "message": "test(client): Upgrade libpnet depedency to 0.27.2 [#2347] (#2348)\n\nAdditionally, only depend on pnet_datalink to reduce compile times.\n\nCloses #2347",
          "timestamp": "2020-11-27T21:55:03-08:00",
          "tree_id": "4b365d0f3aedef52acb5f5648720da602aa165f4",
          "url": "https://github.com/hyperium/hyper/commit/1ba2a141a6f8736446ff4a0111df347c0dc66f6c"
        },
        "date": 1606543194879,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75220,
            "range": "± 6832",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6944838,
            "range": "± 658867",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30173,
            "range": "± 3421",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211965,
            "range": "± 17481",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52740401,
            "range": "± 2359652",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51643671,
            "range": "± 1109430",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53903157,
            "range": "± 1138814",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4053505,
            "range": "± 479764",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34820,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52453,
            "range": "± 1561",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 171777,
            "range": "± 14565",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8614605,
            "range": "± 8774952",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8582278,
            "range": "± 9194560",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8503213,
            "range": "± 9002745",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57295838,
            "range": "± 4447192",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76882905,
            "range": "± 19070707",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6089242,
            "range": "± 947998",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 57467,
            "range": "± 11154",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 112854,
            "range": "± 4310",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faern@faern.net",
            "name": "Linus Färnstrand",
            "username": "faern"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21dea2114574bbeda41bad5dff5e8e3613352124",
          "message": "chore(dependencies): upgrade socket2 (#2349)\n\nUpgrades to a version not making invalid assumptions about\nthe memory layout of std::net::SocketAddr",
          "timestamp": "2020-11-30T05:48:28-08:00",
          "tree_id": "9ab22d866d6f8bd5c19045971f7def89440f4b46",
          "url": "https://github.com/hyperium/hyper/commit/21dea2114574bbeda41bad5dff5e8e3613352124"
        },
        "date": 1606744432255,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 118647,
            "range": "± 16354",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6561977,
            "range": "± 1087176",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 37538,
            "range": "± 5097",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 254113,
            "range": "± 47407",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52011944,
            "range": "± 859196",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52291048,
            "range": "± 5440247",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59952281,
            "range": "± 5132116",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3647031,
            "range": "± 545821",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46915,
            "range": "± 7475",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 70921,
            "range": "± 11986",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 190893,
            "range": "± 22752",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10440810,
            "range": "± 9616124",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11063082,
            "range": "± 9348719",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10590050,
            "range": "± 9290506",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61571015,
            "range": "± 9386662",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74380824,
            "range": "± 13305044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6359362,
            "range": "± 1693564",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 85994,
            "range": "± 30253",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 161776,
            "range": "± 22795",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbellC@users.noreply.github.com",
            "name": "Chris Campbell",
            "username": "campbellC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8641733be3c732acd6c94ec9ad161b88a4d467d",
          "message": "docs(client): add example of client conn usage (#2350)\n\nAdd basic, module level example for the Builder performing a handshake,\r\nspawning a task to run the Connection and sending a single request and\r\nreceiving the response.\r\n\r\nCloses #2272",
          "timestamp": "2020-12-01T15:58:28-08:00",
          "tree_id": "e2f028a020be1b9371e71c37d2c8a1ede13cd4fe",
          "url": "https://github.com/hyperium/hyper/commit/f8641733be3c732acd6c94ec9ad161b88a4d467d"
        },
        "date": 1606867404166,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77414,
            "range": "± 7534",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7101038,
            "range": "± 608922",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33480,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 237449,
            "range": "± 7691",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52009510,
            "range": "± 837850",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50382936,
            "range": "± 2828898",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53593134,
            "range": "± 2112983",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4276365,
            "range": "± 978598",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37544,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 55428,
            "range": "± 1310",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 177688,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10485752,
            "range": "± 9433452",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10729715,
            "range": "± 9029038",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10034534,
            "range": "± 9348181",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63008772,
            "range": "± 13705789",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75824975,
            "range": "± 14206048",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6810465,
            "range": "± 1448563",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 62253,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 122168,
            "range": "± 2573",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jim.holmstroem@gmail.com",
            "name": "Jim Holmström",
            "username": "Jim-Holmstroem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc",
          "message": "docs(examples): gateway: remove extra slash for uri (#2351)\n\nThe PathAndQuery already contains the leading slash, which erroneously\nsets the proxied path to \"//..\" and not \"/..\".",
          "timestamp": "2020-12-03T13:36:32-08:00",
          "tree_id": "4e55ad2349d3c0f604047e8311c6116188a96110",
          "url": "https://github.com/hyperium/hyper/commit/3cb6b4e840952eeb4d400e3138fc2ff363eeb3fc"
        },
        "date": 1607031735538,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 123274,
            "range": "± 10657",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7563263,
            "range": "± 1934174",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43371,
            "range": "± 7665",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 274334,
            "range": "± 25170",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52739624,
            "range": "± 2089709",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 60557736,
            "range": "± 4921663",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 63548815,
            "range": "± 4162521",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4208111,
            "range": "± 883817",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50500,
            "range": "± 5135",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 79154,
            "range": "± 10731",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 210519,
            "range": "± 14010",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11342241,
            "range": "± 8904024",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11628761,
            "range": "± 9221988",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11201082,
            "range": "± 9470739",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65426188,
            "range": "± 6582839",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 81766673,
            "range": "± 15069036",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6912356,
            "range": "± 1401979",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 85118,
            "range": "± 7517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 162591,
            "range": "± 11851",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/hyperium/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607034375655,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76592,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7671547,
            "range": "± 479310",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32155,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 222434,
            "range": "± 6693",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52800232,
            "range": "± 1567463",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52110147,
            "range": "± 1673364",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54759255,
            "range": "± 1040498",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4014986,
            "range": "± 391279",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36102,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53574,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 173924,
            "range": "± 2254",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8726205,
            "range": "± 9160801",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8884593,
            "range": "± 9540480",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8459028,
            "range": "± 9293440",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57230038,
            "range": "± 4587031",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73883745,
            "range": "± 14100910",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6195645,
            "range": "± 847923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58227,
            "range": "± 3162",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115972,
            "range": "± 3799",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@bnoordhuis.nl",
            "name": "Ben Noordhuis",
            "username": "bnoordhuis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d9a5806e146798d0cbe67672bbe3ad5ae680393",
          "message": "refactor(http1): change HTTP2->1.1 warning to debug (#2354)\n\nWe use hyper in a proxy-like way where an incoming HTTP/2 request is\r\nproxied to a HTTP/1 backend and it was reported that the protocol\r\ncoercion warnings were a limiting factor in the total throughput\r\nof the system.\r\n\r\nWhile it can be worked around by explicitly setting the request version\r\nto HTTP_11, it seems likely other people also hit this performance snag.\r\nThat's why this commit changes them from warnings to debug messages.",
          "timestamp": "2020-12-14T13:57:32-08:00",
          "tree_id": "9e3c4f830981935a989cd5e49ed4969a219ee850",
          "url": "https://github.com/hyperium/hyper/commit/7d9a5806e146798d0cbe67672bbe3ad5ae680393"
        },
        "date": 1607983356265,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79785,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7288806,
            "range": "± 632788",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34270,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 241545,
            "range": "± 12292",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52779445,
            "range": "± 1648268",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54554809,
            "range": "± 1794851",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57193526,
            "range": "± 1265225",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4040112,
            "range": "± 694561",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38285,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54571,
            "range": "± 4076",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 176197,
            "range": "± 4679",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9182394,
            "range": "± 9211442",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9200780,
            "range": "± 9062422",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8905084,
            "range": "± 9281677",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62953456,
            "range": "± 4580446",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77753017,
            "range": "± 13145613",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6561073,
            "range": "± 1050945",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61573,
            "range": "± 5942",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 120147,
            "range": "± 2460",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arve.knudsen@gmail.com",
            "name": "Arve Knudsen",
            "username": "aknuds1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd",
          "message": "refactor(http1): move upgrade state from body to head (#2353)\n\nMove state required for protocol upgrades to head\r\nrepresentations, instead of associating it with the body.\r\n\r\nCloses #2340.\r\n\r\nSigned-off-by: Arve Knudsen <arve.knudsen@gmail.com>",
          "timestamp": "2020-12-15T07:31:48-08:00",
          "tree_id": "ce286b8ff248e5bf4aa6e6f01981ed49c84d72b1",
          "url": "https://github.com/hyperium/hyper/commit/ede3a6bd9dfd8f33d6c0a4efd94f5bdafe383ebd"
        },
        "date": 1608046584211,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68535,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7072036,
            "range": "± 501612",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29265,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 208801,
            "range": "± 4999",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51970784,
            "range": "± 1263388",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 56210477,
            "range": "± 1762990",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59625798,
            "range": "± 1261968",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4153097,
            "range": "± 547941",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32520,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46561,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148632,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7722729,
            "range": "± 8799594",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7803387,
            "range": "± 8934294",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11605486,
            "range": "± 4315860",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54256277,
            "range": "± 4126817",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69592478,
            "range": "± 13222176",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5736566,
            "range": "± 711335",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52588,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102158,
            "range": "± 1994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@forallsecure.com",
            "name": "Alex Rebert",
            "username": "alpire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dd761c87de226261599ff2518fe9d231ba1c82d",
          "message": "fix(http1): ignore chunked trailers (#2357)\n\nPreviously, hyper returned an \"Invalid chunk end CR\" error on chunked\r\nresponses with trailers, as described in RFC 7230 Section 4.1.2. This\r\ncommit adds code to ignore the trailers.\r\n\r\nCloses #2171",
          "timestamp": "2020-12-15T14:23:07-08:00",
          "tree_id": "6ad353d3f416f304ea0c71efb8de8cfe808c235a",
          "url": "https://github.com/hyperium/hyper/commit/1dd761c87de226261599ff2518fe9d231ba1c82d"
        },
        "date": 1608071298344,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 83746,
            "range": "± 20490",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7027051,
            "range": "± 970425",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33898,
            "range": "± 5602",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 227266,
            "range": "± 38368",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52793779,
            "range": "± 2073506",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50802303,
            "range": "± 2378908",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53660436,
            "range": "± 1611928",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3622495,
            "range": "± 603318",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37492,
            "range": "± 7803",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54947,
            "range": "± 6395",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 182684,
            "range": "± 30479",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9352517,
            "range": "± 9905105",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9862566,
            "range": "± 10098407",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9302208,
            "range": "± 9684649",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57794461,
            "range": "± 4547155",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73448223,
            "range": "± 15161916",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6031088,
            "range": "± 720846",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58887,
            "range": "± 5649",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 116956,
            "range": "± 6472",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46450720+bishtpawan@users.noreply.github.com",
            "name": "Pawan Singh Bisht",
            "username": "bishtpawan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c593c292508f31a2986d5ddac3fb23b234a0e2c",
          "message": "refactor(error): use `matches!` macro in `Error::is_*` methods (#2367)",
          "timestamp": "2020-12-21T12:25:47-08:00",
          "tree_id": "c61537b497a46b23e64414fa1f2c822dadd22fc4",
          "url": "https://github.com/hyperium/hyper/commit/6c593c292508f31a2986d5ddac3fb23b234a0e2c"
        },
        "date": 1608582677577,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 90771,
            "range": "± 13053",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8989744,
            "range": "± 1599511",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 37978,
            "range": "± 9307",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 248589,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52810204,
            "range": "± 1658025",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 57160527,
            "range": "± 1677335",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59080262,
            "range": "± 1108281",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4960840,
            "range": "± 654219",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38551,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54633,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175058,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9134674,
            "range": "± 8929811",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10920179,
            "range": "± 9754972",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10017141,
            "range": "± 10115477",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67363689,
            "range": "± 9605648",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 89678930,
            "range": "± 19899044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 8468329,
            "range": "± 1839755",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 69502,
            "range": "± 10802",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 121037,
            "range": "± 2403",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pankajchaudhary172@gmail.com",
            "name": "Pankaj Chaudhary",
            "username": "PankajChaudhary5"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3077da1f891b09de18320d9f6ccf94f136943d",
          "message": "refactor(http1): updated Encoder/Decoder match with the matches macro (#2368)",
          "timestamp": "2020-12-22T10:50:57-08:00",
          "tree_id": "954af38876df04f6db5c6ee06c14b56137895d6c",
          "url": "https://github.com/hyperium/hyper/commit/3b3077da1f891b09de18320d9f6ccf94f136943d"
        },
        "date": 1608663306613,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69370,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6104678,
            "range": "± 202960",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29068,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 210220,
            "range": "± 5344",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51095584,
            "range": "± 1627135",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47027080,
            "range": "± 1590134",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50748750,
            "range": "± 801219",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3246767,
            "range": "± 249308",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32472,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46838,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147664,
            "range": "± 3145",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7674157,
            "range": "± 8731359",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7669493,
            "range": "± 31454",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7471357,
            "range": "± 8550449",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51891251,
            "range": "± 3825849",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 62938646,
            "range": "± 12547186",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5387893,
            "range": "± 627825",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52122,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102333,
            "range": "± 1858",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad42acc79b54ce38adf99c58c894f29fa2665ad",
          "message": "feat(lib): Upgrade to Tokio 1.0 (#2369)\n\nCloses #2370",
          "timestamp": "2020-12-23T10:36:12-08:00",
          "tree_id": "a68f91816f1b911d3febd5935d6ced61572b7018",
          "url": "https://github.com/hyperium/hyper/commit/fad42acc79b54ce38adf99c58c894f29fa2665ad"
        },
        "date": 1608748843014,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68885,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7901489,
            "range": "± 1195966",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29228,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 215236,
            "range": "± 5409",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51998004,
            "range": "± 1218787",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 59191675,
            "range": "± 1403431",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 60826522,
            "range": "± 2156116",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4530480,
            "range": "± 564092",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32847,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47113,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 150217,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7740762,
            "range": "± 8828072",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7862939,
            "range": "± 8680680",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7555582,
            "range": "± 8928403",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56042822,
            "range": "± 5267212",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71134020,
            "range": "± 14081843",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6164724,
            "range": "± 1006994",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52993,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102908,
            "range": "± 1940",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c784a10174deb461b2eaa59ed9fabae5c315eb68",
          "message": "v0.14.0",
          "timestamp": "2020-12-23T10:58:04-08:00",
          "tree_id": "d2d618457fe2744c73a88c191d7ac276e12343ba",
          "url": "https://github.com/hyperium/hyper/commit/c784a10174deb461b2eaa59ed9fabae5c315eb68"
        },
        "date": 1608750237140,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 129959,
            "range": "± 13537",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7120808,
            "range": "± 976182",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43872,
            "range": "± 4326",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 281394,
            "range": "± 35324",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52797289,
            "range": "± 2417435",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 60262578,
            "range": "± 5099431",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 64957338,
            "range": "± 4199700",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4237886,
            "range": "± 540235",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52031,
            "range": "± 5650",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 79702,
            "range": "± 10672",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 212391,
            "range": "± 20277",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11992648,
            "range": "± 9140786",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11875308,
            "range": "± 9209239",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11437586,
            "range": "± 9039190",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66514604,
            "range": "± 5952048",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79785656,
            "range": "± 16087733",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6889517,
            "range": "± 929481",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 86245,
            "range": "± 7699",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 169873,
            "range": "± 26495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c97a10612521c7a6e7bcdc4a1d90539fc33a0938",
          "message": "docs(lib): enable doc_cfg on docs.rs builds (#2372)",
          "timestamp": "2020-12-23T12:55:28-08:00",
          "tree_id": "d52617a54b2e520e90a5aabc708a41b251ef8938",
          "url": "https://github.com/hyperium/hyper/commit/c97a10612521c7a6e7bcdc4a1d90539fc33a0938"
        },
        "date": 1608757242150,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 72105,
            "range": "± 5417",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6258138,
            "range": "± 643319",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29699,
            "range": "± 4137",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 192581,
            "range": "± 47278",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52783853,
            "range": "± 2079667",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47045638,
            "range": "± 4774158",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51538484,
            "range": "± 3073045",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3336002,
            "range": "± 498112",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 30340,
            "range": "± 4405",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 43402,
            "range": "± 9664",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 143169,
            "range": "± 26577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7932719,
            "range": "± 5565721",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11775273,
            "range": "± 5427021",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11762849,
            "range": "± 5408147",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54695962,
            "range": "± 7742651",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69025040,
            "range": "± 13111829",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5515698,
            "range": "± 765667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52627,
            "range": "± 9454",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103866,
            "range": "± 8459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8",
          "message": "v0.14.1",
          "timestamp": "2020-12-23T13:01:14-08:00",
          "tree_id": "75ef9cf142d8a168ed3445192349cd6e581a8501",
          "url": "https://github.com/hyperium/hyper/commit/3d6bdbe85006e623eae83d7c3ce9a45680d6c2c8"
        },
        "date": 1608765888019,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 73110,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6784317,
            "range": "± 801283",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28064,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 212449,
            "range": "± 26891",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52769535,
            "range": "± 2217642",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48669735,
            "range": "± 2483820",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51714072,
            "range": "± 3548089",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3890150,
            "range": "± 834879",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33091,
            "range": "± 3557",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 48399,
            "range": "± 3606",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 166051,
            "range": "± 20692",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8350658,
            "range": "± 9083588",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8487288,
            "range": "± 9641579",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8140721,
            "range": "± 10054056",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53974094,
            "range": "± 8149275",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70487032,
            "range": "± 14753212",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5704221,
            "range": "± 745081",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 55568,
            "range": "± 6947",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 113397,
            "range": "± 6800",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nikhil.benesch@gmail.com",
            "name": "Nikhil Benesch",
            "username": "benesch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a59e5fc7ddedcb7cbd91e97b33385fde57aa10",
          "message": "feat(client): expose `connect` types without proto feature (#2377)\n\nMake it possible to refer to Connected, Connection, HttpConnector, etc.\r\nwithout enabling either of the http1/http2 features. This makes feature\r\nselection work better for downstream libraries like hyper-openssl, which\r\ndon't want to commit to any particular protocol.\r\n\r\nFix #2376.",
          "timestamp": "2020-12-28T15:50:28-08:00",
          "tree_id": "45ebc36d02cfce21512ca4f21e0186086b3aca7d",
          "url": "https://github.com/hyperium/hyper/commit/73a59e5fc7ddedcb7cbd91e97b33385fde57aa10"
        },
        "date": 1609199691965,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 61078,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6989792,
            "range": "± 780692",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 25663,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 184887,
            "range": "± 4321",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51188062,
            "range": "± 1602749",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54934384,
            "range": "± 3652218",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56483715,
            "range": "± 1896255",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4103172,
            "range": "± 625406",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 28763,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 41472,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 131608,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 6828941,
            "range": "± 9018984",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 6893791,
            "range": "± 59074",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 6691219,
            "range": "± 9063961",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51246440,
            "range": "± 4667328",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68825514,
            "range": "± 15071526",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5658359,
            "range": "± 943639",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 46366,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 91965,
            "range": "± 2179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mussitantesmortem@gmail.com",
            "name": "Maxim Zhukov",
            "username": "Mephistophiles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "510b998ff3dc75e0dfc7e236212f5fef33142ad1",
          "message": "chore(dev-dependencies): bump url to 2.2 (#2379)",
          "timestamp": "2020-12-28T15:52:28-08:00",
          "tree_id": "cd9b46cf00546ee0223f287f33d1698b9c2ee161",
          "url": "https://github.com/hyperium/hyper/commit/510b998ff3dc75e0dfc7e236212f5fef33142ad1"
        },
        "date": 1609199802539,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 68340,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6354009,
            "range": "± 243187",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29252,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 210801,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51172428,
            "range": "± 1692861",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51955714,
            "range": "± 3305036",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54727564,
            "range": "± 2226997",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3379849,
            "range": "± 365972",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32649,
            "range": "± 999",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47182,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149428,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7646372,
            "range": "± 8910656",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7657732,
            "range": "± 54448",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7432361,
            "range": "± 8722736",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 52444591,
            "range": "± 3453763",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64410811,
            "range": "± 13149386",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5408849,
            "range": "± 547369",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52958,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103712,
            "range": "± 1888",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fanatid@ya.ru",
            "name": "Kirill Fomichev",
            "username": "fanatid"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6d4fcbee65bebf461291def75f4c512ec62a664",
          "message": "feat(server): expose `Accept` without httpX features (#2382)",
          "timestamp": "2020-12-29T10:19:57-08:00",
          "tree_id": "db446f1dadd4ba7c9cb2342b2f9a33db36b205c5",
          "url": "https://github.com/hyperium/hyper/commit/a6d4fcbee65bebf461291def75f4c512ec62a664"
        },
        "date": 1609266308509,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 73303,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7003933,
            "range": "± 350307",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32905,
            "range": "± 6310",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219781,
            "range": "± 21622",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52791793,
            "range": "± 1665566",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49959248,
            "range": "± 1445474",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54166307,
            "range": "± 4478908",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3837627,
            "range": "± 515307",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35107,
            "range": "± 2197",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52100,
            "range": "± 4055",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 164470,
            "range": "± 8848",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8408033,
            "range": "± 8676696",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9098693,
            "range": "± 10165584",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8879213,
            "range": "± 9262515",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59167936,
            "range": "± 5855806",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73663357,
            "range": "± 14283575",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6140525,
            "range": "± 964797",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 65458,
            "range": "± 15312",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115798,
            "range": "± 4972",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "8861f9a7867216c81ea14ac6224c11a1303e7761",
          "message": "v0.14.2",
          "timestamp": "2020-12-29T10:51:50-08:00",
          "tree_id": "aa4f215d53ca79b417c4b5250584edb476b9caa6",
          "url": "https://github.com/hyperium/hyper/commit/8861f9a7867216c81ea14ac6224c11a1303e7761"
        },
        "date": 1609268337857,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 66770,
            "range": "± 11542",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6177463,
            "range": "± 581883",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29566,
            "range": "± 3469",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 198784,
            "range": "± 19515",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52797881,
            "range": "± 1303701",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46423866,
            "range": "± 4236213",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50427330,
            "range": "± 4269007",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3157363,
            "range": "± 449843",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 26817,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 40614,
            "range": "± 7747",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 132892,
            "range": "± 18573",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7097441,
            "range": "± 5384360",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 6716629,
            "range": "± 898620",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10561477,
            "range": "± 5056098",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 47299159,
            "range": "± 6026479",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 58623526,
            "range": "± 12993135",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 4836434,
            "range": "± 698852",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 46238,
            "range": "± 7306",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 87478,
            "range": "± 14686",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "c9c46ed60bd43484d67a98a63496ad0277c791a2",
          "message": "refactor(ffi): Add Reason-Phrase API\n\nThis adds an internal ability to copy the HTTP/1 reason-phrase and place\nit in the `http::Extensions` of a response, if it doesn't match the\ncanonical reason. This could be exposed in the Rust API later, but for\nnow it is only used by the C API.",
          "timestamp": "2021-01-08T10:25:53-08:00",
          "tree_id": "08e88a2638eb39443de49d5c60610b9f5c4315da",
          "url": "https://github.com/hyperium/hyper/commit/c9c46ed60bd43484d67a98a63496ad0277c791a2"
        },
        "date": 1610130658880,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79658,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7374009,
            "range": "± 275596",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 34042,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 242899,
            "range": "± 5230",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52795204,
            "range": "± 1610170",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53110650,
            "range": "± 2112321",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56776003,
            "range": "± 998654",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4039912,
            "range": "± 355829",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38077,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54640,
            "range": "± 789",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 180762,
            "range": "± 4766",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9050667,
            "range": "± 9180747",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9432332,
            "range": "± 9007109",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8883522,
            "range": "± 9143860",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62847229,
            "range": "± 4021786",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77347321,
            "range": "± 12911616",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6682099,
            "range": "± 942593",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61334,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 120994,
            "range": "± 2241",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "446dd2f0c70dba22d8d589a68b224c2838a4ddf1",
          "message": "chore(security): add a SECURITY.md policy (#2395)",
          "timestamp": "2021-01-12T14:45:10-08:00",
          "tree_id": "bb354693eb5c0c6bb50733be6b61409e21d6d2a1",
          "url": "https://github.com/hyperium/hyper/commit/446dd2f0c70dba22d8d589a68b224c2838a4ddf1"
        },
        "date": 1610491836963,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75680,
            "range": "± 2069",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6746154,
            "range": "± 202047",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32256,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 225867,
            "range": "± 7893",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52756425,
            "range": "± 2401950",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49509381,
            "range": "± 1172505",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53044615,
            "range": "± 1274431",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3574587,
            "range": "± 224797",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35846,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52549,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 176466,
            "range": "± 8448",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8610669,
            "range": "± 9346332",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8907666,
            "range": "± 9430169",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8438921,
            "range": "± 9208679",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56428983,
            "range": "± 3855133",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 70091351,
            "range": "± 12774629",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5908865,
            "range": "± 419965",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59499,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115758,
            "range": "± 1754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a15f3f7f0f536c74d51636bbc00f6b5ec110472b",
          "message": "refactor(client): minimize the amount of instantiated code (#2391)\n\n* Halve the amount of conn_task instantiations\r\n* Extract non-generic parts of client::handshake\r\n* Extract the non-generic parts of call_async",
          "timestamp": "2021-01-12T16:18:22-08:00",
          "tree_id": "56d1582e4c7f3e995ff4cba0fa9bf34cc857408d",
          "url": "https://github.com/hyperium/hyper/commit/a15f3f7f0f536c74d51636bbc00f6b5ec110472b"
        },
        "date": 1610497391788,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 107328,
            "range": "± 32822",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5657005,
            "range": "± 634828",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 38397,
            "range": "± 2744",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 234436,
            "range": "± 31507",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 53570499,
            "range": "± 3999762",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 45398803,
            "range": "± 2755491",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 47110594,
            "range": "± 2437567",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3119282,
            "range": "± 327838",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 44489,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 68543,
            "range": "± 8216",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175428,
            "range": "± 15206",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9501959,
            "range": "± 8995223",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9647210,
            "range": "± 9185075",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9319322,
            "range": "± 8857901",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53386719,
            "range": "± 5021492",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 64014215,
            "range": "± 12687754",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5534488,
            "range": "± 895476",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 79256,
            "range": "± 7903",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 142323,
            "range": "± 8555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ddb669328163001fd18a4a21109e95047848bf",
          "message": "refactor(lib): apply unreachable_pub lint (#2400)\n\nCloses #2390",
          "timestamp": "2021-01-14T09:57:55-08:00",
          "tree_id": "4bcb4014c9adce39c308cc16bb2ae4cc95515ea4",
          "url": "https://github.com/hyperium/hyper/commit/f0ddb669328163001fd18a4a21109e95047848bf"
        },
        "date": 1610647376607,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 81541,
            "range": "± 31921",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6745585,
            "range": "± 2616594",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29489,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 212554,
            "range": "± 4651",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51954689,
            "range": "± 2795882",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54899980,
            "range": "± 10663587",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59601483,
            "range": "± 11967473",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4238095,
            "range": "± 2011487",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32173,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46431,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147903,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9420982,
            "range": "± 9707999",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9103105,
            "range": "± 10479362",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9213434,
            "range": "± 9574644",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60540088,
            "range": "± 12153874",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77661286,
            "range": "± 23185341",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5004897,
            "range": "± 461172",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58128,
            "range": "± 36112",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 120893,
            "range": "± 23979",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257d6a99193c9404ce055727833e1490c23a7197",
          "message": "docs(server): set doc_cfg attributes for `tcp` feature gated Server methods (#2401)",
          "timestamp": "2021-01-14T13:56:49-08:00",
          "tree_id": "50a57b0eb9c3a2e602849788aa791e078f5087bb",
          "url": "https://github.com/hyperium/hyper/commit/257d6a99193c9404ce055727833e1490c23a7197"
        },
        "date": 1610661692608,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 67896,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6689183,
            "range": "± 491674",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29338,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 211731,
            "range": "± 4578",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51250254,
            "range": "± 1308560",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54495564,
            "range": "± 4043536",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57247319,
            "range": "± 3003944",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3893263,
            "range": "± 578049",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32607,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46516,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147406,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7667956,
            "range": "± 8873647",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7791786,
            "range": "± 8836524",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7480432,
            "range": "± 8579037",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55584621,
            "range": "± 7334652",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72268011,
            "range": "± 14372559",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5770522,
            "range": "± 880784",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52474,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103345,
            "range": "± 1889",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "24809834+aeryz@users.noreply.github.com",
            "name": "Abdullah Eryuzlu",
            "username": "aeryz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c",
          "message": "feat(body): add `send_trailers` to Body channel's `Sender` (#2387)\n\nCloses #2260",
          "timestamp": "2021-01-15T10:14:21-08:00",
          "tree_id": "98ca623fc9171719aabfeac75bad0285557a25fb",
          "url": "https://github.com/hyperium/hyper/commit/bf8d74ad1cf7d0b33b470b1e61625ebac56f9c4c"
        },
        "date": 1610734782905,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 66822,
            "range": "± 11569",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6651066,
            "range": "± 579508",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28028,
            "range": "± 5327",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 199530,
            "range": "± 36315",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52041203,
            "range": "± 2538661",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47547968,
            "range": "± 3407421",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51170557,
            "range": "± 1793540",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3407301,
            "range": "± 618743",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34170,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46040,
            "range": "± 8177",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 151891,
            "range": "± 27758",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8045997,
            "range": "± 5228500",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11509135,
            "range": "± 5455287",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11216789,
            "range": "± 5494426",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50680948,
            "range": "± 6069799",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66088792,
            "range": "± 13150105",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5457214,
            "range": "± 1135668",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 53518,
            "range": "± 9455",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 99745,
            "range": "± 17394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/hyperium/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610756957743,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76855,
            "range": "± 15491",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6884459,
            "range": "± 1238117",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30972,
            "range": "± 6416",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232826,
            "range": "± 44940",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52010169,
            "range": "± 1692513",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50609017,
            "range": "± 7903779",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52471463,
            "range": "± 2246415",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3677881,
            "range": "± 433292",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35625,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 51501,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 161206,
            "range": "± 19795",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8138722,
            "range": "± 9767278",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8437173,
            "range": "± 9350979",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7904709,
            "range": "± 9834744",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54732503,
            "range": "± 4760443",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69573932,
            "range": "± 14551373",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5710876,
            "range": "± 1127749",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 54002,
            "range": "± 8754",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 102132,
            "range": "± 13117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mikeroelens@gmail.com",
            "name": "Mike Roelens",
            "username": "mikeroelens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9",
          "message": "docs(client): fix typo in httpbin.org domain (#2406)",
          "timestamp": "2021-01-19T08:30:17-08:00",
          "tree_id": "e7ca69f8ee39808cd92f849107091c006710c06e",
          "url": "https://github.com/hyperium/hyper/commit/ec2fd4a15f6c0ec612c38a9596c56cd87477d0f9"
        },
        "date": 1611074092263,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 61752,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7364888,
            "range": "± 1789040",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 25820,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 186995,
            "range": "± 2729",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51158209,
            "range": "± 1623944",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 56682354,
            "range": "± 3780486",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58386089,
            "range": "± 3326003",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4801670,
            "range": "± 1265093",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32848,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46490,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147340,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7798565,
            "range": "± 4456843",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7922330,
            "range": "± 8666962",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7549619,
            "range": "± 9655805",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 52283275,
            "range": "± 6213565",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75189806,
            "range": "± 23050807",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6938381,
            "range": "± 1828160",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52535,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 104746,
            "range": "± 1296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erikdesjardins@users.noreply.github.com",
            "name": "erikdesjardins",
            "username": "erikdesjardins"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9956587f83428a5dbe338ba0b55c1dc0bce8c282",
          "message": "feat(body): reexport `hyper::body::SizeHint` (#2404)",
          "timestamp": "2021-01-19T14:50:07-08:00",
          "tree_id": "56032966673662aaf1b8aa45fabd5895f1546240",
          "url": "https://github.com/hyperium/hyper/commit/9956587f83428a5dbe338ba0b55c1dc0bce8c282"
        },
        "date": 1611096878165,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69514,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6453892,
            "range": "± 394011",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29355,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 212540,
            "range": "± 4445",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51611521,
            "range": "± 1592341",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51632354,
            "range": "± 1442207",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55939372,
            "range": "± 1834927",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3395857,
            "range": "± 215573",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32868,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46800,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 147728,
            "range": "± 1505",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7659758,
            "range": "± 8860907",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7813688,
            "range": "± 8925323",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7475234,
            "range": "± 8506281",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53448606,
            "range": "± 3987426",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 65798818,
            "range": "± 12252027",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5554481,
            "range": "± 703424",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52268,
            "range": "± 1247",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103298,
            "range": "± 1956",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paolo@paolo565.org",
            "name": "Paolo Barbolini",
            "username": "paolobarbolini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237b2ce08341266b62a8d1cfa974779c511a0710",
          "message": "refactor(lib): Remove useless uses of Pin (#2405)",
          "timestamp": "2021-01-19T14:51:34-08:00",
          "tree_id": "850a7bc3c25f7d4f85ccb325ecd0e717537eedf0",
          "url": "https://github.com/hyperium/hyper/commit/237b2ce08341266b62a8d1cfa974779c511a0710"
        },
        "date": 1611097012975,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 79278,
            "range": "± 21504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7169529,
            "range": "± 911053",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32160,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 227485,
            "range": "± 8590",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52787327,
            "range": "± 1669041",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52412773,
            "range": "± 4959044",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55233271,
            "range": "± 3925570",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3671108,
            "range": "± 1022735",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37907,
            "range": "± 8022",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53641,
            "range": "± 9638",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 176441,
            "range": "± 20085",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8786085,
            "range": "± 9707245",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8659334,
            "range": "± 9552312",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8233560,
            "range": "± 9030586",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58294099,
            "range": "± 6996943",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69663504,
            "range": "± 13825609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5967815,
            "range": "± 775039",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58534,
            "range": "± 5633",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 113024,
            "range": "± 8291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/hyperium/hyper/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611184485848,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69558,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7645781,
            "range": "± 739666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29596,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 214590,
            "range": "± 5608",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51210340,
            "range": "± 1608554",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49820510,
            "range": "± 1121837",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51586520,
            "range": "± 773316",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3752408,
            "range": "± 464363",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 28988,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 41174,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 130579,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7739797,
            "range": "± 9273402",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11168576,
            "range": "± 5301866",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7429820,
            "range": "± 9325151",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50394572,
            "range": "± 3452609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67534997,
            "range": "± 14995747",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5641826,
            "range": "± 851782",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 45819,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 92340,
            "range": "± 746",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/hyperium/hyper/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611686494102,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 60607,
            "range": "± 2050",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6198375,
            "range": "± 741053",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 26020,
            "range": "± 1084",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 188042,
            "range": "± 2175",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51190048,
            "range": "± 1652469",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49791302,
            "range": "± 1885683",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53026158,
            "range": "± 4298575",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3243295,
            "range": "± 276370",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 28485,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 40510,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 129816,
            "range": "± 4628",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7984211,
            "range": "± 5321462",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7750611,
            "range": "± 66679",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10790119,
            "range": "± 4761100",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 48374011,
            "range": "± 3455828",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68125963,
            "range": "± 18681295",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5001002,
            "range": "± 653880",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 45645,
            "range": "± 2430",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 89916,
            "range": "± 2275",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/hyperium/hyper/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611872060416,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 69227,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7259804,
            "range": "± 1027221",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29503,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213400,
            "range": "± 2571",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51223256,
            "range": "± 2123930",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 55945184,
            "range": "± 3324994",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58920788,
            "range": "± 2241092",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3783945,
            "range": "± 584562",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32851,
            "range": "± 957",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46996,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 148393,
            "range": "± 2203",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7721019,
            "range": "± 9344581",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11963944,
            "range": "± 6862326",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7510139,
            "range": "± 8437778",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54540226,
            "range": "± 4523414",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69374154,
            "range": "± 14518593",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5688217,
            "range": "± 725068",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 52147,
            "range": "± 927",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 92393,
            "range": "± 1694",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/hyperium/hyper/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612287597247,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 73916,
            "range": "± 4911",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6740241,
            "range": "± 701389",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33106,
            "range": "± 5374",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213671,
            "range": "± 35263",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52119872,
            "range": "± 2363364",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47612402,
            "range": "± 2159251",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52000944,
            "range": "± 2694376",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3424310,
            "range": "± 505120",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35365,
            "range": "± 5042",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 51257,
            "range": "± 10731",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 162306,
            "range": "± 20249",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8468308,
            "range": "± 9555408",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8338067,
            "range": "± 1113950",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8517422,
            "range": "± 9916779",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55157144,
            "range": "± 5732701",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 68458737,
            "range": "± 14169258",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5946964,
            "range": "± 1213207",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58405,
            "range": "± 10663",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 109345,
            "range": "± 16196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/hyperium/hyper/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612314833276,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78163,
            "range": "± 4127",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6930953,
            "range": "± 505359",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31647,
            "range": "± 4462",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226554,
            "range": "± 8156",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52794980,
            "range": "± 143471",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50104811,
            "range": "± 4985790",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52661880,
            "range": "± 1914161",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3713863,
            "range": "± 342534",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35919,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54198,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 174943,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8712048,
            "range": "± 9523199",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8858003,
            "range": "± 9223363",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8539837,
            "range": "± 9278400",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56685082,
            "range": "± 4544661",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72584533,
            "range": "± 16339270",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6032126,
            "range": "± 922104",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61112,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 118923,
            "range": "± 2451",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "48d4594930da4e227039cfa254411b85c98b63c5",
          "message": "v0.14.3",
          "timestamp": "2021-02-05T14:11:35-08:00",
          "tree_id": "d88e7eda40795e66511eaa1d123a313a49dceb2b",
          "url": "https://github.com/hyperium/hyper/commit/48d4594930da4e227039cfa254411b85c98b63c5"
        },
        "date": 1612565743870,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 120844,
            "range": "± 12754",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7271632,
            "range": "± 1799054",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44920,
            "range": "± 8256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 279331,
            "range": "± 51381",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52035171,
            "range": "± 1648991",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52546991,
            "range": "± 4783097",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53818466,
            "range": "± 4008533",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4123817,
            "range": "± 1091728",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52829,
            "range": "± 6444",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 78205,
            "range": "± 8331",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 206645,
            "range": "± 46062",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11229848,
            "range": "± 9741662",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11334868,
            "range": "± 8905765",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10612300,
            "range": "± 9220039",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61446315,
            "range": "± 6948362",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77203711,
            "range": "± 15127938",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6798609,
            "range": "± 1802213",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 88715,
            "range": "± 15777",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 162110,
            "range": "± 25796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710",
          "message": "refactor(client): fix unused Pin import without http2",
          "timestamp": "2021-02-05T15:51:56-08:00",
          "tree_id": "fa9a75ecb484a8ac069e00f1ae3ba10ecc08c5e4",
          "url": "https://github.com/hyperium/hyper/commit/4445e736ba45d4c91d2a4b2ad2aaac02ea7cf710"
        },
        "date": 1612569465443,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 123777,
            "range": "± 21723",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7587052,
            "range": "± 1819081",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 52665,
            "range": "± 23182",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 274968,
            "range": "± 41939",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52017109,
            "range": "± 2900222",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 57719120,
            "range": "± 9784415",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55917364,
            "range": "± 9441150",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4037487,
            "range": "± 1002159",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52512,
            "range": "± 8743",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 77888,
            "range": "± 13159",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 204311,
            "range": "± 45987",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11879704,
            "range": "± 10129649",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11982943,
            "range": "± 10059071",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11998842,
            "range": "± 10371783",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60748593,
            "range": "± 14346883",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75685737,
            "range": "± 20771324",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6447669,
            "range": "± 1721766",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 95475,
            "range": "± 21414",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 162729,
            "range": "± 35633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "196d9bd69c0059dbff6771f6dce9188d4841c185",
          "message": "v0.14.4",
          "timestamp": "2021-02-05T15:54:38-08:00",
          "tree_id": "52f1523e30d46a411c7bac0f9e938ae39421a2d0",
          "url": "https://github.com/hyperium/hyper/commit/196d9bd69c0059dbff6771f6dce9188d4841c185"
        },
        "date": 1612569737731,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 71014,
            "range": "± 8506",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6644972,
            "range": "± 555871",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31369,
            "range": "± 2777",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 217621,
            "range": "± 25818",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52800808,
            "range": "± 1989703",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48184896,
            "range": "± 3437039",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51695646,
            "range": "± 2682222",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3333451,
            "range": "± 509419",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34263,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 48940,
            "range": "± 5840",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 159844,
            "range": "± 20107",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8585223,
            "range": "± 5185359",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8309142,
            "range": "± 9662173",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8221364,
            "range": "± 9701416",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53780503,
            "range": "± 4754816",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67775397,
            "range": "± 12722393",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5765009,
            "range": "± 798941",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 54916,
            "range": "± 7684",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 106849,
            "range": "± 13639",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95ce96048cd71fcfa63d75b1caa75ea000292487",
          "message": "test(http1): fix non_fmt_panic warning (#2424)",
          "timestamp": "2021-02-06T07:20:01-08:00",
          "tree_id": "a82efa92576bf667d07a01250dd13e8e54e2de33",
          "url": "https://github.com/hyperium/hyper/commit/95ce96048cd71fcfa63d75b1caa75ea000292487"
        },
        "date": 1612625118335,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 126996,
            "range": "± 26408",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6819060,
            "range": "± 1590231",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 47913,
            "range": "± 7016",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 294502,
            "range": "± 32387",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52012658,
            "range": "± 882186",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51697630,
            "range": "± 4916367",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54246744,
            "range": "± 4091624",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3579079,
            "range": "± 542551",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 57991,
            "range": "± 7793",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 83463,
            "range": "± 16302",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 207528,
            "range": "± 31370",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11121111,
            "range": "± 8777838",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11176676,
            "range": "± 8849309",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10655574,
            "range": "± 9007530",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59138468,
            "range": "± 5284648",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74683256,
            "range": "± 14441374",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6278360,
            "range": "± 1094585",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 89932,
            "range": "± 16495",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 160352,
            "range": "± 34985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/hyperium/hyper/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612626075940,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 119842,
            "range": "± 6775",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7341385,
            "range": "± 1348081",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44431,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 269668,
            "range": "± 20196",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52001526,
            "range": "± 863529",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50209746,
            "range": "± 3334739",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51957382,
            "range": "± 3373185",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3888884,
            "range": "± 1022071",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 51676,
            "range": "± 5493",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80334,
            "range": "± 5093",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 201908,
            "range": "± 8093",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10764542,
            "range": "± 8734291",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10855461,
            "range": "± 8967349",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10636629,
            "range": "± 8725814",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60746780,
            "range": "± 5644703",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72068750,
            "range": "± 13230210",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6172238,
            "range": "± 1227632",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 86495,
            "range": "± 4609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 159175,
            "range": "± 17357",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/hyperium/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612906672018,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 130242,
            "range": "± 49820",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7347148,
            "range": "± 2631585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 46717,
            "range": "± 11136",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 292363,
            "range": "± 115339",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 53591119,
            "range": "± 3614752",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 63055808,
            "range": "± 10421055",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 71997024,
            "range": "± 8162801",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3605918,
            "range": "± 1512749",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 48162,
            "range": "± 9652",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 72188,
            "range": "± 13517",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 173140,
            "range": "± 39860",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10579062,
            "range": "± 9916189",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11529603,
            "range": "± 10960923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11644393,
            "range": "± 11064979",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60483524,
            "range": "± 11079268",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71981043,
            "range": "± 13874918",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6028782,
            "range": "± 1352167",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 84592,
            "range": "± 22780",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 152645,
            "range": "± 37248",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/hyperium/hyper/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613673674043,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 119464,
            "range": "± 22962",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6466835,
            "range": "± 1308472",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44824,
            "range": "± 5363",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 276649,
            "range": "± 43467",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52005415,
            "range": "± 808023",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52739712,
            "range": "± 3145902",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54815924,
            "range": "± 3064016",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3505521,
            "range": "± 738993",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52889,
            "range": "± 5134",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 80759,
            "range": "± 8219",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 208337,
            "range": "± 26822",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10948144,
            "range": "± 9428085",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11048620,
            "range": "± 9131602",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10872105,
            "range": "± 9327270",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59512203,
            "range": "± 6467207",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72210567,
            "range": "± 15090212",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6232076,
            "range": "± 735774",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 87721,
            "range": "± 16089",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 162465,
            "range": "± 37541",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/hyperium/hyper/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613771819202,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 138892,
            "range": "± 19669",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7877970,
            "range": "± 1954260",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 52234,
            "range": "± 8874",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 317841,
            "range": "± 63438",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 53592715,
            "range": "± 3275077",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 63066411,
            "range": "± 4631821",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 64933851,
            "range": "± 3670348",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4570633,
            "range": "± 770586",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 59552,
            "range": "± 9572",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 96737,
            "range": "± 18774",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 257691,
            "range": "± 44614",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 14189389,
            "range": "± 9823783",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 14439550,
            "range": "± 9492711",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 13441087,
            "range": "± 9836082",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 72238084,
            "range": "± 8324109",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 87858779,
            "range": "± 14202662",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7536749,
            "range": "± 1539604",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 111660,
            "range": "± 18868",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 196760,
            "range": "± 31595",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b11eee9bde421cdc1680cadabfd38c5aff8e62f",
          "message": "fix(client): omit default port from automatic Host headers (#2441)\n\nFixes hyperium/hyper#2407",
          "timestamp": "2021-02-22T11:33:28-08:00",
          "tree_id": "5623a60dd93bcebc066f49c52f6b97ab29c074b1",
          "url": "https://github.com/hyperium/hyper/commit/0b11eee9bde421cdc1680cadabfd38c5aff8e62f"
        },
        "date": 1614022743710,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 133166,
            "range": "± 31510",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6673914,
            "range": "± 1035011",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 51021,
            "range": "± 7501",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 312995,
            "range": "± 36185",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52049682,
            "range": "± 2398905",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50113209,
            "range": "± 3663243",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51948511,
            "range": "± 3141421",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3918371,
            "range": "± 1388476",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 59986,
            "range": "± 6459",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 92986,
            "range": "± 10941",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 228388,
            "range": "± 54759",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12451532,
            "range": "± 9044616",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12752051,
            "range": "± 9254349",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12091198,
            "range": "± 9753443",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63041921,
            "range": "± 6654079",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76739876,
            "range": "± 14388094",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6546797,
            "range": "± 1115295",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 101913,
            "range": "± 11059",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 179197,
            "range": "± 17494",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cfir16@gmail.com",
            "name": "CfirTsabari",
            "username": "CfirTsabari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a60280873bbfe5c2a2806c88891bf91e3e4c3882",
          "message": "refactor(ffi): Removed need for cbindgen type renames (#2442)\n\nFixes hyperium/hyper#2428",
          "timestamp": "2021-02-22T16:12:06-08:00",
          "tree_id": "9f554a19f8d87074aa036b33399d42eed1a3f3ce",
          "url": "https://github.com/hyperium/hyper/commit/a60280873bbfe5c2a2806c88891bf91e3e4c3882"
        },
        "date": 1614039455110,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 128172,
            "range": "± 47741",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6935222,
            "range": "± 1465763",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 51777,
            "range": "± 8415",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 312849,
            "range": "± 28595",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52001269,
            "range": "± 846115",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52401041,
            "range": "± 2913540",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54447135,
            "range": "± 4333893",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4020083,
            "range": "± 1260570",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 59832,
            "range": "± 9622",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 88812,
            "range": "± 19149",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 227722,
            "range": "± 47990",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12558325,
            "range": "± 9180842",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13119796,
            "range": "± 9404127",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12415327,
            "range": "± 9055416",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66425104,
            "range": "± 4932539",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79153538,
            "range": "± 12928471",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6781592,
            "range": "± 1041087",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 101303,
            "range": "± 16228",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 178461,
            "range": "± 51434",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/hyperium/hyper/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614039831766,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 80870,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6787781,
            "range": "± 261304",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 35065,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 241926,
            "range": "± 5787",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52808255,
            "range": "± 956820",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48906490,
            "range": "± 1602892",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53594616,
            "range": "± 2155353",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3784254,
            "range": "± 308240",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 39907,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 62224,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 203940,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10562840,
            "range": "± 9269742",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10704749,
            "range": "± 9202393",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11133940,
            "range": "± 10016575",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63758223,
            "range": "± 5443290",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77356400,
            "range": "± 13157624",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6798308,
            "range": "± 573094",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 71770,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 135351,
            "range": "± 2201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/hyperium/hyper/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614395175419,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 131402,
            "range": "± 31955",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6539368,
            "range": "± 1281016",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 47142,
            "range": "± 8394",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 275330,
            "range": "± 72853",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52020752,
            "range": "± 2075827",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51642065,
            "range": "± 7584924",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58987698,
            "range": "± 6161222",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3667065,
            "range": "± 967211",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53456,
            "range": "± 10318",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82635,
            "range": "± 20290",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 225482,
            "range": "± 86939",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12234167,
            "range": "± 9731868",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12666028,
            "range": "± 10097268",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12296945,
            "range": "± 10854287",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65308833,
            "range": "± 12406285",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77697178,
            "range": "± 15902557",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6854355,
            "range": "± 1870980",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 95487,
            "range": "± 21759",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 177722,
            "range": "± 41852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/hyperium/hyper/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614906544499,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 124026,
            "range": "± 23019",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6548510,
            "range": "± 1707360",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43152,
            "range": "± 9364",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 261226,
            "range": "± 68541",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52005040,
            "range": "± 1605504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52272527,
            "range": "± 7795459",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56653358,
            "range": "± 5908997",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3549104,
            "range": "± 647585",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 47001,
            "range": "± 10940",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 92935,
            "range": "± 27600",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 221232,
            "range": "± 34776",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12780688,
            "range": "± 9771542",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12554510,
            "range": "± 10097507",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12554225,
            "range": "± 9546380",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62268393,
            "range": "± 8978019",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75496264,
            "range": "± 15923540",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6608793,
            "range": "± 1381475",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 107395,
            "range": "± 55871",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 185441,
            "range": "± 33536",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/hyperium/hyper/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615242276572,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78650,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7127344,
            "range": "± 357964",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33900,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 238845,
            "range": "± 3504",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52689121,
            "range": "± 1684823",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51956768,
            "range": "± 1488565",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55247213,
            "range": "± 935450",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3990755,
            "range": "± 412891",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38393,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 60484,
            "range": "± 1698",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 198622,
            "range": "± 3220",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10394234,
            "range": "± 9177074",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10552719,
            "range": "± 9250749",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10140707,
            "range": "± 9217296",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64139578,
            "range": "± 4443201",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80804978,
            "range": "± 14601097",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6921058,
            "range": "± 840544",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 69709,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 132854,
            "range": "± 1947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/hyperium/hyper/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615399573660,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 118942,
            "range": "± 13907",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6420089,
            "range": "± 1503603",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44852,
            "range": "± 4666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 280589,
            "range": "± 41712",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52039802,
            "range": "± 2442366",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50477342,
            "range": "± 3391218",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52180923,
            "range": "± 4481078",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3578080,
            "range": "± 658736",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50837,
            "range": "± 7775",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84097,
            "range": "± 14246",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 213041,
            "range": "± 27878",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12536344,
            "range": "± 8996967",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12282242,
            "range": "± 9142196",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11629947,
            "range": "± 9287665",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62542626,
            "range": "± 8217822",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 78456439,
            "range": "± 15491401",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6631418,
            "range": "± 1387073",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 94228,
            "range": "± 31776",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 167260,
            "range": "± 21144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/hyperium/hyper/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615848353883,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 113021,
            "range": "± 16226",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6075280,
            "range": "± 1214879",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 39349,
            "range": "± 3291",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 245740,
            "range": "± 22490",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52001662,
            "range": "± 826536",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47514571,
            "range": "± 4090221",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 49869694,
            "range": "± 4239080",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3356224,
            "range": "± 517482",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 47066,
            "range": "± 6061",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 79466,
            "range": "± 5856",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 202672,
            "range": "± 19281",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11340089,
            "range": "± 8822357",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11468619,
            "range": "± 9160650",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10899411,
            "range": "± 9400465",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60982657,
            "range": "± 5816998",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74969314,
            "range": "± 13861685",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6650593,
            "range": "± 1404158",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 95015,
            "range": "± 18160",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 163513,
            "range": "± 15599",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/hyperium/hyper/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616175862358,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 121899,
            "range": "± 8558",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6369055,
            "range": "± 1161052",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 45890,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 276098,
            "range": "± 65366",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52018723,
            "range": "± 1628713",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51263146,
            "range": "± 4733830",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53654795,
            "range": "± 4369834",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3431465,
            "range": "± 344327",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53469,
            "range": "± 5527",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 86855,
            "range": "± 17820",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 219619,
            "range": "± 38090",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12264436,
            "range": "± 8844267",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12454512,
            "range": "± 8931103",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12053719,
            "range": "± 8942055",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 63889744,
            "range": "± 4941049",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76826723,
            "range": "± 12505762",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6546441,
            "range": "± 730235",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 98638,
            "range": "± 30179",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 173928,
            "range": "± 9976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/hyperium/hyper/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616451757967,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 127717,
            "range": "± 18270",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6635077,
            "range": "± 740945",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 47332,
            "range": "± 8712",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 285517,
            "range": "± 40670",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52011508,
            "range": "± 906625",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52832939,
            "range": "± 5575693",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 60660413,
            "range": "± 5509187",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3965173,
            "range": "± 455243",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53243,
            "range": "± 6809",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 95738,
            "range": "± 12715",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 232965,
            "range": "± 21265",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 13763745,
            "range": "± 9419489",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13915690,
            "range": "± 9646694",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 13120609,
            "range": "± 9416871",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 68881044,
            "range": "± 7599986",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80320714,
            "range": "± 14898470",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7170221,
            "range": "± 1011576",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 112119,
            "range": "± 17222",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 197219,
            "range": "± 32754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/hyperium/hyper/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616704791036,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 115928,
            "range": "± 11405",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6730015,
            "range": "± 1540204",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44258,
            "range": "± 7934",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 261621,
            "range": "± 26337",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52009141,
            "range": "± 862893",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50500130,
            "range": "± 4531205",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52483316,
            "range": "± 4255881",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3838765,
            "range": "± 1127259",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 50946,
            "range": "± 8506",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 85365,
            "range": "± 16598",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 227240,
            "range": "± 59768",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12395431,
            "range": "± 9359429",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12925490,
            "range": "± 9378072",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12799536,
            "range": "± 9319927",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67787243,
            "range": "± 11355732",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79845744,
            "range": "± 16584534",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6635004,
            "range": "± 1251498",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 96978,
            "range": "± 18207",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 174386,
            "range": "± 30495",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68d4e4a3db91fb43f41a8c4fce1175ddb56816af",
          "message": "feat(client): allow HTTP/0.9 responses behind a flag (#2473)\n\nFixes #2468",
          "timestamp": "2021-03-26T11:25:00-07:00",
          "tree_id": "659e8520b14a640bd1fbf5ccb416cd8911abcb6a",
          "url": "https://github.com/hyperium/hyper/commit/68d4e4a3db91fb43f41a8c4fce1175ddb56816af"
        },
        "date": 1616783412935,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76421,
            "range": "± 3925",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6756533,
            "range": "± 293721",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33402,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232608,
            "range": "± 14792",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52803365,
            "range": "± 524662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49893661,
            "range": "± 1295384",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53178554,
            "range": "± 1322931",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4037276,
            "range": "± 395660",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37169,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 57993,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 185089,
            "range": "± 11591",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9962707,
            "range": "± 8788465",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10037162,
            "range": "± 9198372",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9693187,
            "range": "± 9223373",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60364542,
            "range": "± 3917654",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75052117,
            "range": "± 12882911",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6525104,
            "range": "± 713290",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67989,
            "range": "± 2001",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 128516,
            "range": "± 6083",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "52582625+nylanderdev@users.noreply.github.com",
            "name": "Rasmus Nylander",
            "username": "nylanderdev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "895e4cf3fbb4119daac06ff446c47ac478468c97",
          "message": "refactor(ffi): return null ptr instead of aborting in C API (#2478)\n\nMake C API functions that return pointers return null in case of a\r\npanic, instead of aborting.\r\n\r\nAdd ffi_fn! macro rules that enable default error values to be returned\r\nby writing \"?= <value>\" after an ffi function's body.",
          "timestamp": "2021-03-26T11:26:44-07:00",
          "tree_id": "b6c8e5ea7a1d552350a2986fbc66e3cd784bc782",
          "url": "https://github.com/hyperium/hyper/commit/895e4cf3fbb4119daac06ff446c47ac478468c97"
        },
        "date": 1616783537748,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 74748,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7114738,
            "range": "± 282111",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32626,
            "range": "± 1956",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226273,
            "range": "± 8483",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52053268,
            "range": "± 1755521",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51847758,
            "range": "± 1424892",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54261379,
            "range": "± 744890",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4023714,
            "range": "± 316912",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36978,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 59073,
            "range": "± 2262",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 184357,
            "range": "± 7468",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9898109,
            "range": "± 9219169",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10183841,
            "range": "± 9224710",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9980249,
            "range": "± 9657908",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61820919,
            "range": "± 6166165",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79005086,
            "range": "± 16305547",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6606657,
            "range": "± 918396",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68801,
            "range": "± 25564",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 128284,
            "range": "± 9437",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/hyperium/hyper/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616785699012,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 61739,
            "range": "± 1722",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8182452,
            "range": "± 1091547",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 26456,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 187623,
            "range": "± 5501",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51177361,
            "range": "± 4730083",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51359765,
            "range": "± 1886158",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52964418,
            "range": "± 2149581",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5499305,
            "range": "± 809254",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 29660,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 45305,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 142122,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9401231,
            "range": "± 10874478",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9468002,
            "range": "± 9973234",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9066868,
            "range": "± 10383489",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 71932891,
            "range": "± 10229165",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 88949566,
            "range": "± 22425497",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7426243,
            "range": "± 1491839",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51762,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114918,
            "range": "± 3866",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/kevinburke/hyper/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617772319179,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 118616,
            "range": "± 16145",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 8193809,
            "range": "± 2623107",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 42725,
            "range": "± 4114",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 266894,
            "range": "± 23896",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52005470,
            "range": "± 1278041",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54947580,
            "range": "± 6857827",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 57403886,
            "range": "± 5400284",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4906625,
            "range": "± 2002548",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 49265,
            "range": "± 7529",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 82973,
            "range": "± 8145",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 221966,
            "range": "± 37969",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12158546,
            "range": "± 9119123",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12497914,
            "range": "± 9223101",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11772223,
            "range": "± 9397188",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 67655317,
            "range": "± 8740397",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 84581703,
            "range": "± 23735055",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7840043,
            "range": "± 1559765",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 97566,
            "range": "± 16192",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 173547,
            "range": "± 15184",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}