---
title: SongPro.org
---

<p class="lead">SongPro is a text file format for making chord & lyric lead sheets for songs.</p>

## Example

Here's a partial example of a song in the SongPro format:

```
@title=Escape Capsule
@artist=Brian Kelly
!bandcamp=https://spilth.bandcamp.com/track/escape-capsule

# Verse 1

Climb a-[D]board [A]
I've been [Bm]waiting for you [F#m]
Climb a-[G]board [D]
You'll be [Asus4]safe in [A7]here

# Chorus 1

[G] I'm a [D]rocket [F#]made for your pro-[Bm]tection
You're [G]safe with me, un-[A]til you leave

# Solo

| [Em] | [D] | [Em] | [D] |
| [Em] | [D] | [Em] | [F#] |
| [B] | [B] | [Bm] | [Bm] |
```

When converted into HTML it looks like this:

<img src="/images/preview.png" class="img-fluid img-thumbnail" />

Note: Chord diagrams are provided by the [chord_diagrams gem](https://github.com/spilth/chord_diagrams)

## SongPro Format

A SongPro file can contain Attributes, Custom Attributes, Sections, Lyrics & Chords, Tablature and Measures.

### Attributes

Attributes are added with the format:

```
@attribute=value
```

You can specify the following song attributes:

- title
- artist
- capo
- key
- tempo
- year
- album
- tuning

They can be placed anywhere in the song but it's recommended to put them at the top of your file.
 The values are text that are displayed in the rendered output.

### Custom Attributes

Custom attributes can be added the format:

```
!custom_attribute=value
```

A custom attribute can be anything. These are mainly used by other apps that want to store additional attributes beyond the core set or are specific to the app.

### Sections

Any line starting with `#` is considered the beginning of a new section:

```
# Section Name
```

Section names are usually things like:

- Verse 1
- Chorus 2
- Bridge
- Outro

But you can name them however you please.

### Lyrics & Chords

Chords are anything contained inside of brackets, such as `C#m7`. Lyrics are words by themselves or around chords.

```
You'll be [Asus4]safe in [A7]here
```

### Tablature

Any line starting with `|-` is considered to be tablature. For example:

```
|-8--10--12--10--8-|
```

### Measures

When you want to show where chord changes are for an instrumental section, start a line with `| ` and use another `| ` whenever a new measure starts.

```
| [G] | [D] | [F#] | [Bm] [D/A] |
```

### Comments

You can include comments throughout the song by prefixing them with `> `. These can be used to provide performance notes/tips to players.

```
> Whistle the verse melody over these chords
```

## SongPro Libraries

- [SongPro Crystal](https://github.com/SongProOrg/songpro-crystal) 
- [SongPro Java](https://github.com/SongProOrg/songpro-java)
- [SongPro Javascript](https://github.com/SongProOrg/songpro-javascript)
- [SongPro Ruby](https://github.com/SongProOrg/songpro-ruby)
- [SongPro Swift](https://github.com/SongProOrg/songpro-swift)

## Related Tools

- [Chord Diagrams Ruby Gem](https://github.com/spilth/chord_diagrams) - Provides chord diagrams as SVGs
